import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
  const [message, setMessage] = useState("")

  const getUsers = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user")
    console.log("response axios object", res)
    console.log("api response", res.data)
    console.log("api response message variable", res.data.message)
    console.log("api response data variable", res.data.data)
    setMessage(res.data.message)
    console.log(res.data.message)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Api Demo 1</h1>
      <button onClick={getUsers}>Get Api</button>
      {message}
      
    </div>
  )
}
