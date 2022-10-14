export interface CanvasState {
  canvas: any | null
}

// сделать ТИП ДЛЯ КАНВАСА! В СТАТЕ И В СЕТ КАНВАС АКТИОНЕ + В АКТИОН КРЕАТОРЕ КАНВАС

export enum CanvasActionTypes {
  SET_CANVAS = "SET_CANVAS"
}

interface SetCanvasAction {
  type: CanvasActionTypes.SET_CANVAS,
  payload: any
}

export type CanvasAction =  SetCanvasAction 