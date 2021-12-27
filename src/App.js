import "./styles.css";
import React,{useState} from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  function fun(){
    // console.log("hi adhaya")
    setCount(count+1)
  }
  const fun1 = () =>{
      setCount(count-1)
  }
  return (
    <div className="App">
      <p style={{backgroundColor:"blue", padding:"2%", marginLeft:"23%", marginRight:"23%", fontSize:"23px"}}>{count}</p>
      <button style={{backgroundColor:"green", fontSize:"23px"}}onClick={fun}>increament</button>
      <button style={{backgroundColor:"yellow", marginLeft:"30%", fontSize:"23px"}} onClick={fun1}>decreament</button>
    </div>
  );
}
