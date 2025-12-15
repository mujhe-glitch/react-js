import React, { useMemo, useState } from 'react'

export const UseMemo1 = () => {
  
    const [data, setdata] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [data1, setdata1] = useState([100,200,300,400,500]);
    const addPerson=()=>{
        setdata([...data,11]);
    }
    const addPerson1=()=>{
        setdata1([...data1,600]);
    }

    const randomNo = useMemo(()=>{
        return Math.floor(Math.random()*100);
    },[data1])
    return (
    <div style={{textAlign:'center'}}> 
        <h1>Use Memo Demo 1</h1>
        <h2>{randomNo}</h2>
        {
            data.map((d)=>{
                return <li>{d}</li>
            })
        }
        {
            data1.map((d)=>{
                return <li>{d}</li>
            })
        }
        <button onClick={addPerson}>add</button>
        <button onClick={addPerson1}>add1</button>

    </div>
  )
}
