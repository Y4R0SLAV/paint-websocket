export default class Tool {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  socket: WebSocket
  id: string

  constructor(canvas: HTMLCanvasElement, socket: WebSocket, id: string) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D
    this.socket = socket
    this.id = id
    this.destroyEvents()
  }

  setFillColor(color: string) {
    this.ctx.fillStyle = color
  }

  setStrokeColor(color: string) {
    this.ctx.strokeStyle = color
  }

  setLineWidth(width: number) {
    this.ctx.lineWidth = width
  }

  destroyEvents() {
    this.canvas.onmousemove = null
    this.canvas.onmousedown = null
    this.canvas.onmouseup = null
  }
}