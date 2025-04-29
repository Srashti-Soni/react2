import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";
const Login=()=> {
     const {SetUser}=useContext(UserContext) 
    const [username,setuser]=useState('')
    const [pass,stPass]=useState('')
  const HandleSubmit=(e)=>{
     e.preventDefault()
     SetUser({username,pass})
   }
    return(
        <div>
            <h2>Login</h2>
            <input
            type="text"
            value={username}
            onChange={(e)=>setuser(e.target.value)}
            placeholder="Enter your name"
            />
            {"     "}
            <input
            type="password"  value={pass}
            onChange={(e)=>stPass(e.target.value)}
            placeholder="password"/>
            <button onClick={HandleSubmit}>Submit</button>
            </div>
        
    )
}
export default Login;