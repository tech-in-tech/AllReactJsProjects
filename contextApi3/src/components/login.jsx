import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";



function Login() {
const[username,setUsername] = useState('')
const[password ,setPassword] = useState('')
const{setUser} = useContext(UserContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({username,password})
  }
  return (
    <div>
      
      <h1>Login</h1>

      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username" />
      
      <input type="password"
       placeholder="password"
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       />

      
      <button onClick={handleSubmit}>Submit</button>
    
    
    </div>

  )
}


export default Login