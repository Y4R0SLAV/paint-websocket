import * as CanvasActionCreators from "../action-creators/canvas"
import * as ToolActionCreators from "../action-creators/tool"

export default {
  ...CanvasActionCreators,
  ...ToolActionCreators
}