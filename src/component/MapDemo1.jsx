import React from 'react'

export const MapDemo1 = () => {
    var users=["Yash","Het","Sujal","Amit"]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo</h1>
        {
            users.map((user)=>{
                return <h1>{user}</h1>
            })
        }
    </div>
  )
}
