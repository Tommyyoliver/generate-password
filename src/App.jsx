import { useEffect, useState } from 'react'
import './App.css'
import logo from "./assets/logo.png"

function App() {
  
  const [display, setDisplay] = useState("");
  const [range, setRange] = useState(0);
  const [symbols, setSymbols] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [alertCopy, setAlertCopy] = useState("");

  const change = (e)=> {
    setDisplay(e.target.value)
  }

  const inputRange = (e)=>{
    setAlertCopy("")
    setRange(e.target.value)
    generatePassword(range)
  }

  const generatePassword = (num) =>{
    const az = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const sy = "!#$%&/!#$%&/!#$%&/!#$%&/!#$%&/!#$%&/!#$%&/!#$%&/"
    const nu = "0123456789012345678901234567890123456789"
    let password = ""
    for(let i = 0; i < num; i++) {
      let random = Math.random()
      let number = num * random
      let symbol;
      password += az[Math.round(number)]
      if(symbols && password.length%7 == 0) {
        password += sy[Math.round(number)]
      }
      if(numbers && password.length%5 == 0) {
        password += nu[Math.round(number)]
      }
    }
    setDisplay(password)
  }

  const upperCase = () => {
    let password = display
    setDisplay(password.toUpperCase())
  }
  const lowerCase = () => {
    let password = display
    setDisplay(password.toLowerCase())
  }
  const copyText = () => {
    navigator.clipboard.writeText(display)
    setAlertCopy("Copied Text")
  }
  return (
    <div className="App">
      <a href='https://tommyyoliver.github.io/portfolio/' target="_blank">
        <img src={logo} alt='logo' />
      </a>
      <h1 className='title'>Generate Password</h1>
      <h3 className='subtitle'>Generate strong passwords with one click</h3>
      <div className='display'>
        <div className='display-input'>
          <input type="text"  value={display} onChange={change} />
          <button onClick={copyText}>Copy</button>
        </div>
        <p>{alertCopy}</p>
      </div>
      <div className='settings'>
        <div className='settings-inputs'>
          <input className='number' type="number" min={0} max={50} value={range} />
          <input className='range' type="range" min="0" max="50" onChange={inputRange} />
        </div>
        <div className='settings-button'>
          <button onClick={upperCase}>Upper</button>
          <button onClick={lowerCase}>Lower</button>
          {symbols ? (
            <button onClick={() => setSymbols(!symbols)} style={{background:"#aaf"}}>Characters</button>
          ) : (
            <button onClick={() => setSymbols(!symbols)}>Characters</button>
          )}
          {numbers ? (
            <button onClick={() => setNumbers(!numbers)} style={{background:"#aaf"}}>Numbers</button>
          ) : (
            <button onClick={() => setNumbers(!numbers)}>Numbers</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
