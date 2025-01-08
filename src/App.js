
import React, { useState } from "react"
import './App.css';

function App() {
 
  const [count,setCount]=useState(0);
  const handelDec=()=>{
    
    setCount(count-1)
  }
  const handelInc=()=>{
    
    setCount(count+1)
  }
  return (
    <div >
      <h1>Counter App</h1>
      <h3>count: {count}</h3>
      <button onClick={handelInc}>Increment</button>
      <button onClick={handelDec}> Decrement</button>
    </div>
  );
}

export default App;
