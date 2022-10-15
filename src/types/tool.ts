import Brush from './../tools/brush'
import Rect from './../tools/rect'
import Circle from './../tools/circle'
import Eraser from './../tools/eraser'
import Line from './../tools/line'

export interface ToolState {
  tool: ToolTypes | null
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

export type ToolTypes = Brush | Rect | Circle | Eraser | Line