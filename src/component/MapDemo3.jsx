import React from 'react'

export const MapDemo3 = () => {
    var user = [
        {id:1,name:"Yash",age:20,gender:"male"},
        {id:1,name:"Hetvi",age:20,gender:"female"},
        {id:1,name:"Sujal",age:20,gender:"male"},
        {id:1,name:"Yashvi",age:20,gender:"female"},
    ];

    return (
    <div style={{textAlign : "center"}}>
        <h1>Map DEmo 3</h1>
        <table className='table'> 
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age </th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((users)=>{
                        return <tr>
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.age}</td>
                        <td>{users.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
