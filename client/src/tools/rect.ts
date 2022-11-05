import Tool from './tool'

export default class Rect extends Tool {
  mouseDown = false
  startX = -1000
  startY = -1000
  saved = ""

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

      let width = currentX - this.startX; 
      let height = currentY - this.startY;

      this.draw(this.startX, this.startY, width, height)
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
}