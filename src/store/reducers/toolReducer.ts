import { ToolState, ToolAction, ToolActionTypes } from './../../types/tool';

const initialState: ToolState = {
  tool: null
}

export const toolReducer = (state = initialState, action: ToolAction): ToolState => {
  switch (action.type) {
    case ToolActionTypes.CHANGE_TOOL: 
      return {...state, tool: action.payload}

    case ToolActionTypes.REMOVE_TOOL: 
      return {...state, tool: null}

    default:
      return state
  }
} 