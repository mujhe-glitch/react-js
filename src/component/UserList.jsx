import React from 'react'

export const UserList = (props) => {
    console.log("User list props ",props)
  return (
    <div>
        <h1>User List</h1>
        <h5>{props.data}</h5>
        <h5>{props.user.id}</h5>
        <h5>{props.user.name}</h5>
        <h5>{props.user.age}</h5>
        <button onClick={()=>{props.test()}}>Test</button>
        <button onClick={()=>{props.test1(100)}}>Test 1</button>

    </div>
  )
}
