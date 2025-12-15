import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'

export const ApiDemo7 = () => {

    const getItem=async()=>{
        const token = localStorage.getItem("token")
        //cokkies
        console.log(token)
        if(!token) return;
        console.log("token found..",token)

        try {
            const res = await axios.get("https://node5.onrender.com/item",{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            console.log(res)
            if(res.status==200){
                toast.success("item fetched........")
            }
        } catch (err) {
            toast.error(err.response.data?.message)            
        }

    }

    return (
    <div style={{textAlign:'center'}}>   
        <h1>Api Demo 7</h1>
        <button onClick={getItem}>Get</button>
    </div>
  )
}
