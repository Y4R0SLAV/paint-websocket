import { CanvasAction, CanvasActionTypes } from "../../types/canvas"

export const setCanvas = (canvas: HTMLCanvasElement | null): CanvasAction => {
  return {type: CanvasActionTypes.SET_CANVAS, payload: canvas}
}