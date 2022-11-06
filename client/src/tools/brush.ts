import { BrushSocketType, FinishSocketType } from '../types/canvas'
import Tool from './tool'

export default class Eraser extends Tool {
  mouseDown = false

  constructor(canvas: HTMLCanvasElement, socket: WebSocket, id: string) {
    super(canvas, socket, id)
    this.listen( )
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
  }

  mouseUpHandler(e: MouseEvent) {
    this.mouseDown = false
    this.socket.send(JSON.stringify({
      method: "draw",
      id: this.id,
      figure: {
        type: "finish"
      } as FinishSocketType
    }))  
  }

  mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true
    this.ctx.beginPath()

    const rect = this.canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    this.ctx.moveTo(x, y)
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown) {
      const rect = this.canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      this.socket.send(JSON.stringify({
        method: "draw",
        id: this.id,
        figure: {
          type: "brush",
          x,
          y } as BrushSocketType
      }))
    }
  }

  static draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.lineTo(x, y)
    ctx.stroke()
  }

}