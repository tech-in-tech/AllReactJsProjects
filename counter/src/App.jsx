import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(50);
  
    const addValue = ()=>{
      setCount(count+1);
    }

  
  const removeValue = ()=>{
    setCount(count-1);
  }
  return (
    <>
      <h1>counter Value : {count}</h1>
      <button 
      onClick={addValue}> 
      Add Value : {count}</button>
      <br /><br />
      <button
      onClick={removeValue}
      >Remove Value : {count}</button>
    </>
  )
}

export default App
