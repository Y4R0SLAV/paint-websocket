import Brush from './../tools/brush'
import Rect from './../tools/rect'
import Circle from './../tools/circle'
import Eraser from './../tools/eraser'
import Line from './../tools/line'

export interface ToolState {
  tool: ToolTypes | null
  strokeColor: string
  fillColor: string
  lineWidth: number
}

export enum ToolActionTypes {
  CHANGE_TOOL = "CHANGE_TOOL",
  REMOVE_TOOL = "REMOVE_TOOL",
  SET_STROKE_COLOR = "SET_STROKE_COLOR",
  SET_FILL_COLOR = "SET_FILL_COLOR",
  SET_LINE_WIDTH = "SET_LINE_WIDTH"
}


interface ChangeToolAction {
  type: ToolActionTypes.CHANGE_TOOL,
  payload: ToolTypes
}

interface RemoveToolAction {
  type: ToolActionTypes.REMOVE_TOOL
}

interface SetStrokeColorAction {
  type: ToolActionTypes.SET_STROKE_COLOR
  payload: string
}

interface SetFillColorAction {
  type: ToolActionTypes.SET_FILL_COLOR
  payload: string
}

interface SetLineWidthAction {
  type: ToolActionTypes.SET_LINE_WIDTH
  payload: number
}


export type ToolAction =  ChangeToolAction 
                          | RemoveToolAction
                          | SetStrokeColorAction
                          | SetFillColorAction
                          | SetLineWidthAction

export type ToolTypes = Brush | Rect | Circle | Eraser | Line