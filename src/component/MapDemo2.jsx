import React from 'react'

export const MapDemo2 = () => {
    var users = [
        {id:1,name:"Yash",age:20,gender:"male"},
        {id:1,name:"Hetvi",age:20,gender:"female"},
        {id:1,name:"Sujal",age:20,gender:"male"},
        {id:1,name:"Yashvi",age:20,gender:"female"},
    ];
  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo</h1>
        {
            users.map((user)=>{
                return <h1>{user.id} - {user.name}  {user.age} </h1>
            })
        }
    </div>
  );
};
