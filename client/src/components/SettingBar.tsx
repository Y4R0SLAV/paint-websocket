import "../styles/toolbar.scss"
import { useActions } from './../hooks/useActions'
import { useTypedSelector } from './../hooks/useTypedSelector';

export const SettingBar = () => {
  const {setLineWidth, setStrokeColor} = useActions()
  const tool = useTypedSelector(state => state.tool.tool)

  const changeLineWidth = (n: number) => {
    setLineWidth(n)
    tool?.setLineWidth(n)
  }

  const changeColor = (c: string) => {
    setStrokeColor(c)
    tool?.setStrokeColor(c)
  }

  return <div className="settingbar">

    <label htmlFor="line-width">Толщина линии</label>
    <input  
            onChange={e => changeLineWidth(+e.currentTarget.value)}
            style={{margin: "0 10px"}}
            id="line-width" type="number" 
            min={1} max={50 } defaultValue={1} />

    <label htmlFor="stroke-color">Цвет обводки</label>
    <input 
      onChange={e => changeColor(e.currentTarget.value)}
      style={{margin: "0 10px"}}
      type="color" id="stroke-color" />

  </div>
}