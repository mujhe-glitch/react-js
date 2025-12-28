import React from 'react'
import { SelectedStudents } from './SelectedStudents'

export const StudentsList = () => {
  return (
    <div style={{textAlign:'center'}}>
        {/* const {studentData} = useContext(StudentContext)
        console.log("inside student list ...",studentData) */}
        <h1>Student List</h1>
        <SelectedStudents></SelectedStudents>
    </div>
  )
}
