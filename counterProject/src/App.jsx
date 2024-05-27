import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)


  // let counter = 52
  const addValue = () => {
    if (counter < 10) {
      counter = counter + 1;
      setCounter(counter);
    }

  }

  const remodeValue = () => {

    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }

  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>counter value : {counter}</h2>
      <button
        onClick={addValue}>
        Add Value</button>
      <br />
      <br />
      <button
        onClick={remodeValue}
      >Remove Value</button>
    </>
  )
}

export default App
