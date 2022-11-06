import { RectSocketType } from '../types/canvas'
import Tool from './tool'

export default class Rect extends Tool {
  mouseDown = false
  startX = -1000
  startY = -1000
  saved = ""
  width = 0
  height = 0

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
        type: "rect",
        x: this.startX,
        y: this.startY,
        width: this.width,
        height:  this.height,
        color: this.ctx.fillStyle
      } as RectSocketType
    }))
  }

  mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true
    this.ctx.beginPath()

    const rect = this.canvas.getBoundingClientRect()

    this.startX = e.clientX - rect.left
    this.startY = e.clientY - rect.top

    this.saved = this.canvas.toDataURL()
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown) {
      const rect = this.canvas.getBoundingClientRect()

      let currentX = e.clientX - rect.left
      let currentY = e.clientY - rect.top 

      this.width = currentX - this.startX; 
      this.height = currentY - this.startY;

      this.draw(this.startX, this.startY, this.width, this.height)
    }
  }

  draw(x: number, y: number, w: number, h: number) {
    const img = new Image()
    img.src = this.saved
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx.beginPath()
      this.ctx.rect(x, y, w, h)
      this.ctx.fill()
      this.ctx.stroke()
    }
  }

  static staticDraw(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.rect(x, y, w, h)
    ctx.fill()
    ctx.stroke()
  }
}