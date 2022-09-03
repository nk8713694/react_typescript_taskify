import { setServers } from 'dns';
import React,{useState} from 'react'

const Form = () => {

    const [username, setUsername] = useState("ni");

    const handleSubmit=(event:any)=>{
        alert(`${username}`)
        event.preventDefault();
    } 
    const handleUsernameChange=(event:any)=>{
     
        setUsername(username+1);
        console.log(username);
        
     }
  return (
  <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type= 'text' value ={username} onMouseOver={handleUsernameChange}/>
            </div>
 
            <button type="submit">Submit</button>
            </form>
  )
}

export default Form
