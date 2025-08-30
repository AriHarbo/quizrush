import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import SelectModePage from './pages/SelectModePage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/select-mode" element={<SelectModePage/>}/>
        </Routes>
    </>
  )
}

export default App
