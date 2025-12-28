import React, { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'
export const SelectedStudents = () => {
    const {studentData} = useContext(StudentContext)
    console.log("inside selected student ... ",studentData);
    return (
    <div style={{textAlign:'center'}}>
        <h1>Selected Student</h1>
    </div>
  )
}
