import { CanvasState, CanvasAction, CanvasActionTypes } from './../../types/canvas';

const initialState: CanvasState = {
  canvas: null
}

export const canvasReducer = (state = initialState, action: CanvasAction): CanvasState => {
  switch (action.type) {
    case CanvasActionTypes.SET_CANVAS: 
      return {...state, canvas: action.payload}

    default:
      return state
  }
} 