import { useState } from 'react'
import Button from './Button'
import './App.css'
import { use } from 'react'

function App() {
  let [bg , setbg] = useState("bg-blue-400 h-screen");
  return (
    <>
    <div className={`${bg} transition-all duration-500`}>
      <Button chgcolor={(color)=>setbg(`${color} h-screen`)}
      />
    </div>
      </>)
}

export default App
