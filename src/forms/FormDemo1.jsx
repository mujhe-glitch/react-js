import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


export const FormDemo1 = () => {
    const{register,handleSubmit}=useForm()
    const [output, setoutput] = useState({})
    const [isSubbmited, setisSubbmited] = useState(false)
    const submitHandler=(data)=>{
        console.log(data)
        setoutput(data)
        setisSubbmited(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>Age</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>COLOR</label>
                <input type='color' {...register("color")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
        {
            isSubbmited==true &&  <div style={{color:output.color}}>
            <h1>OUTPUT</h1>
            <h2>Name = {output.name}</h2>
            <h3>AGe = {output.age}</h3>
            </div>
        }
    </div>
  )
}
