export interface CanvasState {
  canvas: HTMLCanvasElement | null
}

// сделать ТИП ДЛЯ КАНВАСА! В СТАТЕ И В СЕТ КАНВАС АКТИОНЕ + В АКТИОН КРЕАТОРЕ КАНВАС

export enum CanvasActionTypes {
  SET_CANVAS = "SET_CANVAS"
}

interface SetCanvasAction {
  type: CanvasActionTypes.SET_CANVAS,
  payload: HTMLCanvasElement | null
}

export type CanvasAction =  SetCanvasAction 