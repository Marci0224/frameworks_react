import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { randomColor } from './utils'
import './App.css'
import { Frameworks } from './components/Frameworks'

function App() {
  console.log(randomColor(0,255));
  const [bgColor,setBgColor]=useState('rgb(128, 128, 128)');

  return (
    <>
      <Button style={{color:`${randomColor(0,255)}`}}
        onClick=""
      >{randomColor(0,255)}</Button>
      <Frameworks/>
    </>
  )
}

export default App
