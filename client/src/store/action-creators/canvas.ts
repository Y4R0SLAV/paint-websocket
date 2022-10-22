import { CanvasAction, CanvasActionTypes } from "../../types/canvas"

export const setCanvas = (canvas: HTMLCanvasElement | null): CanvasAction => {
  return {type: CanvasActionTypes.SET_CANVAS, payload: canvas}
}

export const pushToUndo = (s: string): CanvasAction => {
  return {type: CanvasActionTypes.PUSH_TO_UNDO, payload: s}
}

export const pushToRedo = (s: string): CanvasAction => {
  return {type: CanvasActionTypes.PUSH_TO_REDO, payload: s}
}

export const undo = (): CanvasAction => {
  return {type: CanvasActionTypes.UNDO}
}

export const redo = (): CanvasAction => {
  return {type: CanvasActionTypes.REDO}
}