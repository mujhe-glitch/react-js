import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom';

export const ApiDemo6 = () => {
    
    const {register,handleSubmit}=useForm();
    const submitHandler=async(data)=>{
      console.log(data)
      data.isActive=data.isActive=="true" ? true:false
      data.age=parseInt(data.age)
      console.log(data)

      try{
        const res = await axios.post("https://node5.onrender.com/user/user",data)
        console.log(res.data)
        alert("user added successfully")
      }catch(err){
        alert('error while adding user')
      }

    }
    return (
    <div style={{textAlign:'center'}}>
        <h1>Add user </h1>
        <form action="" onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label htmlFor="">Name</label>
            <input type='text'{...register("name")}></input>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type='text'{...register("email")}></input>
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type='text'{...register("password")}></input>
          </div>
          <div>
            <label htmlFor="">Age</label>
            <input type='text'{...register("age")}></input>
          </div>
          <div>
            Active : <input type='radio' {...register("isActive")} value="true"></input> <br /><br /><br />
            Not Active : <input type='radio' {...register("isActive")} value="false"></input>
          </div>
          <div>
            <input type="submit"></input>
          </div>
        </form>
    </div>
  )
}
