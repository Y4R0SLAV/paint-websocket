import Tool from './tool'

export default class Line extends Tool {
  mouseDown = false
  saved = ""
  startX = -1
  startY = -1

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

    this.startX = e.clientX - rect.left
    this.startY = e.clientY - rect.top

    this.ctx.moveTo(this.startX, this.startY)
    this.saved = this.canvas.toDataURL()
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown) {
      const rect = this.canvas.getBoundingClientRect()

      let x = e.clientX - rect.left
      let y = e.clientY - rect.top 

      this.draw(x, y)
    }
  }

  draw(x: number, y: number) {


    const img = new Image()
    img.src = this.saved
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)

      this.ctx.beginPath()
      this.ctx.moveTo(this.startX, this.startY)
      this.ctx.lineTo(x, y)
      this.ctx.fill()
      this.ctx.stroke()
    }
  }
}