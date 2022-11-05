import Brush from './brush'

export default class Eraser extends Brush {
  mouseDown = false

  constructor(canvas: HTMLCanvasElement, socket: WebSocket, id: string) {
    super(canvas, socket, id)
  }

  draw(x: number, y: number) {
    this.ctx.strokeStyle = "white"
    this.ctx.lineTo(x, y)
    this.ctx.stroke()
  }
  
}