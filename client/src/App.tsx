import React from 'react'
import "./styles/app.scss"
import { ToolBar } from './components/ToolBar'
import { SettingBar } from './components/SettingBar'
import { Canvas } from './components/Canvas'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={
          <div className="app">
            <ToolBar />
            <SettingBar />
            <Canvas />
          </div>
        } />

        <Route path="*" element={<Navigate to={`f${(+new Date).toString(16)}`} replace />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
