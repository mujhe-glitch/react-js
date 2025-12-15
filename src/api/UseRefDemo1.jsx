import React, { useEffect, useRef } from 'react'

export const UseRefDemo1 = () => {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
    <div style={{textAlign:"center"}}>
        <h1>Use Ref Demo</h1>
        <div>
            <label>Name</label>
            <input ref={inputRef} type='text'></input>
        </div>
    </div>
  )
}
