import React,{useState} from 'react'

export const InputDemo2 = () => {

    const [Name, setName] = useState("")
    const [ChosedColor, setChosedColor] = useState("Black")
    const [IsSubmited, setIsSubmited] = useState(false)
    
    const submitHandler=()=>{
        setIsSubmited(true)
    }

    return (
    <div style={{textAlign:'center'}}>
        <h1>Input demo 2</h1>
        <div>
            <label>Name</label>
            <input type='text' onChange={(event)=>{setName(event.target.value)}}></input>
        </div>
        <div>
            <label>Chooce Color</label>
            <input type='color' onChange={(event)=>{setChosedColor(event.target.value)}}></input>
        </div>
        <div>
            <button onClick={()=>(submitHandler())}>Submit</button>
        </div>
        {
            IsSubmited && <div style={{color:ChosedColor}}>
            <h1>Output</h1>
            <h1>NAme : {Name}</h1>    
            </div>
        }
    </div>
  )
}
