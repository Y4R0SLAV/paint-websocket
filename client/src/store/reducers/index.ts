import { combineReducers } from "redux"

import { toolReducer } from './toolReducer'
import { canvasReducer } from './canvasReducer'

export const rootReducer = combineReducers({
  canvas: canvasReducer,
  tool: toolReducer
})

export type RootState = ReturnType<typeof rootReducer>