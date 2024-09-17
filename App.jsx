import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import GettingStarted from './assets/pages/GettingStarted'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gettingStarted' element={<GettingStarted/>} />
      </Routes>
    </>
  )
}

export default App
