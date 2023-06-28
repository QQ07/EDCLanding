import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

import Landing from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      
      <Landing/>
    </>
  )
}

export default App
