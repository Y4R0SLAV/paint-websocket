import { useEffect, useRef } from 'react'
import '../styles/canvas.scss'
import { useActions } from './../hooks/useActions'
import Brush from './../tools/brush'
import { MyModal } from './Modal'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from './../hooks/useTypedSelector'
import { figureType } from '../types/canvas'

export const Canvas = () => {
  const {setCanvas, setTool, pushToUndo, setSessionId, setSocket} = useActions()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const params = useParams()
  const username = useTypedSelector(state => state.canvas.username)
  const socket = useTypedSelector(state => state.canvas.socket) as WebSocket

  useEffect(() => {
    if (canvasRef.current) {
      setCanvas(canvasRef.current)
    }
  }, [])

  useEffect(() => {
    if (username !== "") {
      const socket = new WebSocket("ws://localhost:5000")
      setSessionId(params.id || "")
      setSocket(socket)

      setTool(new Brush(canvasRef.current as HTMLCanvasElement, socket, params.id as string))

      socket.onopen = () => {
        socket.send(JSON.stringify({
          id: params.id,
          username: username,
          method: "connection"
        }))

        socket.onmessage = (e) => {
          let msg = JSON.parse(e.data) // id: string, method: connection | draw, username: string
          switch (msg.method){
            case "connection":
              console.log(`Пользователь ${msg.username} подключился`)
              break
            case "draw":
              drawHandler(msg)
              break
          }
        }
      }
    }
  }, [username])

  const drawHandler = (msg: {connection: "draw", username: string, id: string, figure: figureType}) => {
    const figure = msg.figure
    const ctx = canvasRef.current?.getContext("2d") as CanvasRenderingContext2D
    switch(figure.type) { 
      case "brush":
        Brush.draw(ctx, figure.x as number, figure.y as number)
        break
      case "finish":
        ctx.beginPath()
        break
    }
  }
  
  return <div className="canvas">
    <MyModal />
    <canvas onMouseDown={() => pushToUndo(canvasRef.current?.toDataURL() as string)} ref={canvasRef} width={600} height={400}/>
  </div>
}