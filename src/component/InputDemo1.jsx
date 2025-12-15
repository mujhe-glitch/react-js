import React from 'react'
import { useState } from 'react'

export const InputDemo1 = () => {
    const [Name, setName] = useState("")
    const [Age, setAge] = useState("")
    const [Email, setEmail] = useState("")
    const [IsSubmited, setIsSubmited] = useState(false)

    const displayHandler=()=>{
        // alert('name = ${Name} \n Age = ${Age} \n Email = ${Email}')
        setIsSubmited(true)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Input Demo 1</h1>
        <div>
            <label>Name</label>
            <input type='text' onChange={(event)=>{setName(event.target.value)}}></input>
            {/* {Name} */}
        </div>
        <div>
            <label>Age</label>
            <input type='text' onChange={(event)=>{setAge(event.target.value)}}></input>
            {/* {Age} */}
        </div>
        <div>
            <label>Email</label>
            <input type='text' onChange={(event)=>{setEmail(event.target.value)}}></input>
            {/* {Email} */}
        </div>
        <div>
            <button onClick={()=>{displayHandler()}}>Display</button>
        </div>
        {
            IsSubmited == true && <div>
                <h1>Output</h1>
                <h2>Name = {Name}</h2>
                <h2>Age = {Age}</h2>
                <h2>Email = {Email}</h2>
            </div>
        }
    </div>
  )
}
