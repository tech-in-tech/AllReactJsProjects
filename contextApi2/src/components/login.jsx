import React,{useContext,useState} from "react";
import userContext from "../context/userContext";

function Login(){
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const {setUserContext} = useContext(userContext);

  const handleSubmit = (e)=>{
    e.prevenDefault()
    setUserContext({userContext,password})
  }
  return(
    <div>
      <h1>Login</h1>
      <input type="text"
      placeholder="UserName"
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      />
    
      <input type="text"
      placeholder="password"
      onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login