import { CanvasState, CanvasAction, CanvasActionTypes } from './../../types/canvas'

const initialState: CanvasState = {
  canvas: null,
  undoList: [],
  redoList: [],
}

export const canvasReducer = (state = initialState, action: CanvasAction): CanvasState => {
  let canvas = state.canvas as HTMLCanvasElement
  let ctx = canvas?.getContext("2d")
  let newUndoList = [...state.undoList]
  let newRedoList = [...state.redoList]

  switch (action.type) {
    case CanvasActionTypes.SET_CANVAS: 
      return {...state, canvas: action.payload}

    case CanvasActionTypes.PUSH_TO_UNDO: 
      return {...state, undoList: [...state.undoList, action.payload]}

    case CanvasActionTypes.PUSH_TO_REDO: 
      return {...state, undoList: [...state.redoList, action.payload]}

    case CanvasActionTypes.UNDO:      
      if (state.undoList.length > 0 && canvas) {
        let dataUrl = newUndoList.pop() as string
        newRedoList.push(canvas.toDataURL())

        let img = new Image()
        img.src = dataUrl
        img.onload = () => {
          ctx?.clearRect(0, 0, canvas.width, canvas.height)
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
        }

      } else {
        ctx?.clearRect(0, 0, canvas.width, canvas.height)
      }
      return {...state, undoList: newUndoList, redoList: newRedoList}

    case CanvasActionTypes.REDO:
      if (state.redoList.length > 0) {
        let dataUrl = newRedoList.pop() as string
        newUndoList.push(canvas.toDataURL())

        let img = new Image()
        img.src = dataUrl
        img.onload = () => {
          ctx?.clearRect(0, 0, canvas.width, canvas.height)
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
        }
      } 
      return {...state, undoList: newUndoList, redoList: newRedoList}

    default:
      return state
  }
} 