import "../styles/toolbar.scss"
import { useActions } from './../hooks/useActions'
import { useTypedSelector } from './../hooks/useTypedSelector'

import Rect from './../tools/rect'
import Brush from "../tools/brush"
import Circle from './../tools/circle'
import Eraser from './../tools/eraser'
import Line from './../tools/line'
import { useState } from "react"

export const ToolBar = () => {
  const {setTool, setFillColor, setStrokeColor, undo, redo } = useActions()
  const canvas = useTypedSelector(state => state.canvas.canvas)
  const tool = useTypedSelector(state => state.tool.tool)
  const strokeColor = useTypedSelector(state => state.tool.strokeColor)
  const socket = useTypedSelector(state => state.canvas.socket) as WebSocket
  const sessionId = useTypedSelector(state => state.canvas.sessionId)

  let [usedEraser, setUsedEraser] = useState(false)

  const changeColor = (c: string) => {
    tool?.setFillColor(c)
    setFillColor(c)

    tool?.setStrokeColor(c)
    setStrokeColor(c)
  }

  const setPreviousColor = () => {
    if (usedEraser) {
      setUsedEraser(false)
      tool?.setStrokeColor(strokeColor || "black")
    }
  }
  

  const changeTool = (n: number) => {
    if (canvas) {
      switch(n) {
        case 1:
          setTool(new Brush(canvas, socket, sessionId));
          break;

        case 2:
          setTool(new Rect(canvas, socket, sessionId));
          break;

        case 3:
          setTool(new Circle(canvas, socket, sessionId));
          break;

        case 4:
          setTool(new Line(canvas, socket, sessionId));
          break;
      }
      setPreviousColor()
    }
  }

  return <div className="toolbar">
    <button className="toolbar__btn brush" onClick={() => changeTool(1)}/>
    <button className="toolbar__btn rect"  onClick={() => changeTool(2)}/>
    <button className="toolbar__btn circle" onClick={() => changeTool(3)}/>
    <button className="toolbar__btn eraser" onClick={() => {canvas && setTool(new Eraser(canvas, socket, sessionId)); setUsedEraser(true)}}/>
    <button className="toolbar__btn line" onClick={() => changeTool(4)}/>

    <input onChange={e => changeColor(e.currentTarget.value)} className="input__color" type="color" />

    <button className="toolbar__btn undo" onClick={() => undo()}/>
    <button className="toolbar__btn redo" onClick={() => redo()}/>
    <button className="toolbar__btn save"/>

  </div>
}