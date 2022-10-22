import { useEffect, useRef } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import '../styles/canvas.scss'
import { useActions } from './../hooks/useActions'
import Brush from './../tools/brush'

export const Canvas = () => {
  const {setCanvas, setTool, pushToUndo} = useActions()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      setCanvas(canvasRef.current)
      setTool(new Brush(canvasRef.current))
    }
  }, [])
  
  return <div className="canvas">
    <canvas onMouseDown={() => pushToUndo(canvasRef.current?.toDataURL() as string)} ref={canvasRef} width={600} height={400}/>
  </div>
}