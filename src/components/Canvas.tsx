import { useEffect, useRef } from 'react'
import '../styles/canvas.scss'
import { useTypedSelector } from './../hooks/useTypedSelector';
import { useActions } from './../hooks/useActions';

export const Canvas = () => {
  const {setCanvas} = useActions()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setCanvas(canvasRef.current)
    console.log(canvasRef.current)
  }, [])
  
  return <div className="canvas">
    <canvas ref={canvasRef} width={600} height={400}/>
  </div>
}