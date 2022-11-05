import Tool from './tool'

export default class Circle extends Tool {
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

      let width = Math.abs(currentX - this.startX) 
      let height = Math.abs(currentY - this.startY)
      let radius = Math.sqrt(width**2 + height**2)

      this.draw(this.startX, this.startY, radius)
    }
  }

  draw(x: number, y: number, r: number) {
    const img = new Image()
    img.src = this.saved
    
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)

      this.ctx.beginPath()
      this.ctx.arc(x, y, r, 0, 2*Math.PI)

      this.ctx.fill()
      this.ctx.stroke()
    }
  }
}