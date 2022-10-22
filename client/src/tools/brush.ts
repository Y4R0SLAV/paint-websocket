import Tool from './tool'

export default class Eraser extends Tool {
  mouseDown = false

  constructor(canvas: HTMLCanvasElement) {
    super(canvas)

    this.listen( )
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
  }

  mouseUpHandler(e: MouseEvent) {
    this.mouseDown = false
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

      this.draw(x, y)
    }
  }

  draw(x: number, y: number) {
    this.ctx.lineTo(x, y)
    this.ctx.stroke()

    

  }

}