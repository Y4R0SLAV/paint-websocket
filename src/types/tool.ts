export interface ToolState {
  tool: ToolTypes | null
}

export enum ToolActionTypes {
  CHANGE_TOOL = "CHANGE_TOOL",
  REMOVE_TOOL = "REMOVE_TOOL"
}

export enum ToolTypes {
  BRUSH = "BRUSH",
  CIRCLE = "REMOVE_TOOL",
  RECT = "RECT",
  ERASER = "ERASER"
}

interface ChangeToolAction {
  type: ToolActionTypes.CHANGE_TOOL,
  payload: ToolTypes
}

interface RemoveToolAction {
  type: ToolActionTypes.REMOVE_TOOL
}


export type ToolAction =  ChangeToolAction 
                          | RemoveToolAction