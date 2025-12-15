import React from 'react'
import { StudentList } from './StudentList'

export const Students = () => {
    var students = [
    { id: 1, name: "Yash", age: 16  , std : 12 , perc : "70%"},
    { id: 2, name: "Rishi", age: 15 , std: 10 , perc : "85%"},
    { id: 3, name: "Het", age: 16 , std : 11 , perc : "80%"},
    { id: 4, name: "Jaival", age: 17 , std : 12 , perc : "95%"},
  ]

  var info = (id) => {
    alert("Student ID: " + id)
  }

  return (
    <div style={{textAlign:"center"}}>
        
            <StudentList students= {students} info={info}></StudentList>
    </div>
  )
}