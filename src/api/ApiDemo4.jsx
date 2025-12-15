import axios from 'axios';
import React, { useState } from 'react'

export const ApiDemo4 = () => {

    const [User, setUser] = useState([]);
    
    const loadPro=async () =>{
        const res = await axios.get("https://dummyjson.com/comments");
        setUser(res.data.comments);
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Api Demo 3</h1>
        <button onClick={loadPro}>Get Data</button>
        {User.length > 0 && (
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Body</th>
                            <th>Post ID</th>
                            <th>Likes</th>
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>Full Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {User.map((u)=>(
                            <tr>
                                <td>{u.id}</td>
                                <td>{u.body}</td>
                                <td>{u.postId}</td>
                                <td>{u.likes}</td>
                                <td>{u.user.id}</td>
                                <td>{u.user.username}</td>
                                <td>{u.user.fullName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        }
    </div>
  )
}
