import Brush from './../tools/brush';

export interface ToolState {
  tool: Brush | null;
}

export enum ToolActionTypes {
  CHANGE_TOOL = "CHANGE_TOOL",
  REMOVE_TOOL = "REMOVE_TOOL"
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

export type ToolTypes = Brush