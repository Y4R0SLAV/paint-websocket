export interface CanvasState {
  canvas: HTMLCanvasElement | null
  undoList: string[]
  redoList: string[]
}

// сделать ТИП ДЛЯ КАНВАСА! В СТАТЕ И В СЕТ КАНВАС АКТИОНЕ + В АКТИОН КРЕАТОРЕ КАНВАС

export enum CanvasActionTypes {
  SET_CANVAS = "SET_CANVAS",
  PUSH_TO_UNDO = "PUSH_TO_UNDO",
  PUSH_TO_REDO = "PUSH_TO_REDO",
  UNDO = "UNDO",
  REDO = "REDO" 
}

interface SetCanvasAction {
  type: CanvasActionTypes.SET_CANVAS,
  payload: HTMLCanvasElement | null
}

interface PushToUndoAction {
  type: CanvasActionTypes.PUSH_TO_UNDO
  payload: string
}

interface PushToRedoAction {
  type: CanvasActionTypes.PUSH_TO_REDO
  payload: string
}

interface UndoAction {
  type: CanvasActionTypes.UNDO
}

interface RedoAction {
  type: CanvasActionTypes.REDO
}


export type CanvasAction =  SetCanvasAction 
                            | PushToUndoAction
                            | PushToRedoAction
                            | UndoAction
                            | RedoAction