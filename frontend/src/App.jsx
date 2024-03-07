import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="p-4 flex items-center justify-center h-screen overflow-hidden">


  {/* <Login /> */}
{/* <Signup /> */}
<HomePage />
  </div>

    </>
  )
}

export default App
