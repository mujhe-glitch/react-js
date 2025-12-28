import React, { useState } from 'react'
import { StudentContext } from '../context/StudentContext'
import { StudentsList } from '../component/StudentsList'

export const Student = () => {
    const [studentData, setstudentData] = useState([
        {id:1,name:"raj",age:23,gender:"male"},
        {id:2,name:"neha",age:25,gender:"female"},
        {id:3,name:"seema",age:24,gender:"female"},
        {id:4,name:"parth",age:25,gender:"male"},
    ])
  return (
    <div style={{textAlign:'center'}}>
        <h1>Students</h1>
        <StudentContext.Provider value={{studentData}}>
            <StudentsList></StudentsList>
        </StudentContext.Provider>
    </div>
  )
}
