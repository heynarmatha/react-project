import {useState} from "react";
import './App.css';
import Number from "./components/Number";


const App = ()=> {

  // const [number,setNumber] = useState(0)
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")

  return (
    <div style={{backgroundColor:"pink",padding:"10px"}}>

     <ul>
       <li>UserName:{name}</li>
     </ul>
     <ul>
       <li>email:{email}</li>
     </ul>
      <Number onButtonClick={(UserName,useremail)=>
      {
        console.log("onButtonclick");
        setName(UserName);
        setEmail(useremail);
      }
      }/>







     
      {/* <button onClick={()=>{setNumber((number)+1)}}>Increment</button>

      <button onClick={()=>{setNumber((number)-1)}}>Decrement</button> */}

    </div>
    
  );
}

export default App;
