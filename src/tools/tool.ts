export default class Tool {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D
    this.destroyEvents()
  }

  fillColor(color: string) {
    this.ctx.fillStyle = color
  }

  strokeColor(color: string) {
    this.ctx.strokeStyle = color
  }

  lineWidth(width: number) {
    this.ctx.lineWidth = width
  }

  destroyEvents() {
    this.canvas.onmousemove = null
    this.canvas.onmousedown = null
    this.canvas.onmouseup = null
  }
}