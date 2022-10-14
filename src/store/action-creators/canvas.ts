import { CanvasAction, CanvasActionTypes } from "../../types/canvas"

export const setCanvas = (canvas: any): CanvasAction => {
  return {type: CanvasActionTypes.SET_CANVAS, payload: canvas}
}