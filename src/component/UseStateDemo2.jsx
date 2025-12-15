import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const[loading,setLoading] = useState(true)
    const stopLoader = ()=>{
        setLoading(false)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Use State Demo 2</h1>
        {
            loading == true && <h1>Loading</h1>
        }
        <button onClick={()=>{stopLoader()}}>stop</button>
    </div>
  )
}
