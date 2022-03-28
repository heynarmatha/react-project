import { useState } from "react";

const Number =({onButtonClick}) =>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    return <div style={{backgroundColor:"skyblue"}}>
    <input onChange={(e)=>{
        setName(e.target.value)    
    }}/>
    <input onChange={(e)=>{
        setEmail(e.target.value)    
    }}/>
    <button onClick={()=>{
        onButtonClick(name,email)
    }}>click me</button>
    </div>
}
export default Number;