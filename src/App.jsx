import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { randomColor } from './utils'
import './App.css'
import { Frameworks } from './components/Frameworks'

function App() {
  //console.log(randomColor(0,255));
  const [bgColor,setBgColor]=useState('rgb(128, 128, 128)');

  const handleClick=()=>{
    console.log("klikk volt");
    setBgColor(randomColor(0,255));
  }
  return (
    <>
      <button style={{color:bgColor}}
        onClick={handleClick}
      >{bgColor}</button>
      <Frameworks bgColor={bgColor}/>
    </>
  )
}

export default App
