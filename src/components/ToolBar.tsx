import "../styles/toolbar.scss"
import { useActions } from './../hooks/useActions'
import { useTypedSelector } from './../hooks/useTypedSelector'

import Rect from './../tools/rect'
import Brush from "../tools/brush"
import Circle from './../tools/circle'
import Eraser from './../tools/eraser'
import Line from './../tools/line'

export const ToolBar = () => {
  const {setTool} = useActions()
  const canvas = useTypedSelector(state => state.canvas.canvas)

  return <div className="toolbar">
    <button className="toolbar__btn brush" onClick={() => {canvas && setTool(new Brush(canvas))}}/>
    <button className="toolbar__btn rect"  onClick={() => {canvas && setTool(new Rect(canvas))}}/>
    <button className="toolbar__btn circle" onClick={() => {canvas && setTool(new Circle(canvas))}}/>
    <button className="toolbar__btn eraser" onClick={() => {canvas && setTool(new Eraser(canvas))}}/>
    <button className="toolbar__btn line" onClick={() => {canvas && setTool(new Line(canvas))}}/>

    <input className="input__color" type="color" />

    <button className="toolbar__btn undo"/>
    <button className="toolbar__btn redo"/>
    <button className="toolbar__btn save"/>

  </div>
}