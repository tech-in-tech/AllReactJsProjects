import React,{useContext,useState} from "react";

import userContext from "../context/userContext";
function Login(){

  const [userName,setUserName] = useState('');
  const [password,setpassword] = useState('');

  const {setUser} = useContext(useContext)
  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({userName,password})

  }

  return(
    <div>
      <h2>Login</h2>
      <input type="text"
      placeholder="Username"
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      />
      <input type="password"
      placeholder="Password"
      value={password}
      onChange={(e)=>setpassword(e.target.value)} 
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}


export default Login