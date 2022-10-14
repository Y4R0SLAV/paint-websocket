import { ToolAction, ToolActionTypes, ToolTypes } from "../../types/tool"

export const setTool = (tool: ToolTypes): ToolAction => {
  return { type: ToolActionTypes.CHANGE_TOOL, payload: tool }
}

export const removeTool = (): ToolAction => {
  return { type: ToolActionTypes.REMOVE_TOOL }
}