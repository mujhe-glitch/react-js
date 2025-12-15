import React, { useState } from 'react'

export const UseStateDemo1 = () => {
    // var count = 0;   
    //count is state variable
    //setCount -> function -> apply any changes is state variable
    //0 intial value    
    const[count,setCount]=useState(0)
    const increseCount = ()=>{
        // alert("Increse Count Function Called")
        // count++;
        setCount(count+1)
        console.log("count = ",count)
    }
    const decreseCount = (x) => {
        alert("decrement -- "+x)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Use State Demo 1</h1>
        <h1>Count = {count}</h1>
        <button onClick={increseCount}>increse</button>
         {/* <button onClick={decreseCount(100)}>decrese</button> */}
        <button onClick={()=>{decreseCount(100)}}>decrese</button>
    </div>
  )
}
