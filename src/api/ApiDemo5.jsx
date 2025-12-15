import axios from 'axios'
import React from 'react'

export const ApiDemo5 = () => {
    const addUser=async()=>{
        const userObj = {
            name:"yash",
            age:20,
            email:"Yash123@gmail.com",
            password:"yash123",
            isActive:true
        }
        try {
            const res = await axios.post("https://node5.onrender.com/user/user",userObj)
            console.log(res.data)
            alert("user added successfully!!")
        } catch (err) {
            alert("error while adding user")
        }
    }
    return (
    <div style={{textAlign:'center'}}>
        <h1>Add user</h1>
        <button onClick={()=>{addUser()}}>ADD</button>
    </div>
  )
}
