export interface CanvasState {
  canvas: HTMLCanvasElement | null
  undoList: string[]
  redoList: string[]
  username: string
  socket: WebSocket | null
  sessionId: string
}

// сделать ТИП ДЛЯ КАНВАСА! В СТАТЕ И В СЕТ КАНВАС АКТИОНЕ + В АКТИОН КРЕАТОРЕ КАНВАС

export enum CanvasActionTypes {
  SET_CANVAS = "SET_CANVAS",
  PUSH_TO_UNDO = "PUSH_TO_UNDO",
  PUSH_TO_REDO = "PUSH_TO_REDO",
  UNDO = "UNDO",
  REDO = "REDO",
  SET_USERNAME = "SET_USERNAME",
  SET_SESSION_ID = "SET_SESSION_ID",
  SET_SOKET = "SET_SOCKET",
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

interface SetUsernameAction {
  type: CanvasActionTypes.SET_USERNAME
  payload: string
}

interface SetSessionIdAction {
  type: CanvasActionTypes.SET_SESSION_ID
  payload: string
}

interface SetSocketAction {
  type: CanvasActionTypes.SET_SOKET
  payload: WebSocket | null
}


export type CanvasAction =  SetCanvasAction 
                            | PushToUndoAction
                            | PushToRedoAction
                            | UndoAction
                            | RedoAction
                            | SetUsernameAction
                            | SetSessionIdAction
                            | SetSocketAction


export type figureType = {
  type: "brush" | "finish",
  x?: number,
  y?: number
}