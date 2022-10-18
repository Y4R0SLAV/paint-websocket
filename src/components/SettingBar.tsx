import "../styles/toolbar.scss"
import { useActions } from './../hooks/useActions'
import { useTypedSelector } from './../hooks/useTypedSelector';

export const SettingBar = () => {
  const {lineWidth} = useActions()
  const tool = useTypedSelector(state => state.tool.tool)

  const onChangeHandler = (n: number) => {
    lineWidth(n)
    tool?.lineWidth(n)
  }

  return <div className="settingbar">
    <label htmlFor="line-width">Толщина линии</label>
    <input  
            onChange={e => onChangeHandler(+e.currentTarget.value)}
            style={{margin: "0 10px"}}
            id="line-width" type="number" 
            min={1} max={50 } defaultValue={1} />
  </div>
}