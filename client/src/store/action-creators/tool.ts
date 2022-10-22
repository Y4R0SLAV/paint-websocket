import { ToolAction, ToolActionTypes, ToolTypes } from "../../types/tool"

export const setTool = (tool: ToolTypes): ToolAction => {
  return { type: ToolActionTypes.CHANGE_TOOL, payload: tool }
}

export const removeTool = (): ToolAction => {
  return { type: ToolActionTypes.REMOVE_TOOL }
}

export const setFillColor = (color: string) => {
  return {type: ToolActionTypes.SET_FILL_COLOR, payload: color}
}

export const setStrokeColor = (color: string) => {
  return {type: ToolActionTypes.SET_STROKE_COLOR, payload: color}
}

export const setLineWidth = (width: number) => {
  return {type: ToolActionTypes.SET_LINE_WIDTH, payload: width}
}