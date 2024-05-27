import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h2 className='p-5 border rounded-xl mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, nobis.</h2>
    <Card userName = "Anubhav"/>
    <Card userName= "sharma" btnText="click me"/>
   

   </>
  )
}

export default App
