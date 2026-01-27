import React from 'react'

    import { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0);
    const handleDecrement=()=>{
        setCount(count-1);
    }
    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleReset=()=>{
        setCount(0);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}

export default Counter
