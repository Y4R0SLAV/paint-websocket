import { ToolState, ToolAction, ToolActionTypes } from './../../types/tool'

const initialState: ToolState = {
  tool: null,
  strokeColor: "",
  fillColor: "",
  lineWidth: 1,
}

export const toolReducer = (state = initialState, action: ToolAction): ToolState => {
  switch (action.type) {
    case ToolActionTypes.CHANGE_TOOL: 
      return {...state, tool: action.payload}

    case ToolActionTypes.REMOVE_TOOL: 
      return {...state, tool: null}

    case ToolActionTypes.SET_FILL_COLOR:
      return {...state, fillColor: action.payload}

    case ToolActionTypes.SET_STROKE_COLOR:
      return {...state, strokeColor: action.payload}

    case ToolActionTypes.SET_LINE_WIDTH:
      return {...state, lineWidth: action.payload}

    default:
      return state
  }
} 