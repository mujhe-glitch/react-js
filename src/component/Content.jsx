import React from 'react'

export const Content = () => {
      var year = 2025;
      var name = "India";
      var isSuperPowe = true;
      var user = {
        id : 1 , name : "Yash" , age : 19 
      }
  return (
    <div>
     <p>We can return only one tag</p>
      <p>Whatever written inside return() statement will display </p>
      <h2>Hello</h2>
      {year}
      <h2>Year = {year}</h2>
      <h2>Name = {name}</h2>
      <h2>Super Power ? {isSuperPowe == true ? "Yes":"No"}</h2>
      <h2>Name = {user.name}</h2>
      <h2>Id = {user.id}</h2>
      <h2>Age = {user.age}</h2>
    </div>
  )
}
