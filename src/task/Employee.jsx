import React from 'react'
import { EmployeeList } from './EmployeeList'

export const  Employee = () => {

    var employee =[
        {
            id:1,
            name:"Yash",
            posi:"HR",
            salary: 90000

         },
         {
            id:2,
            name:"Het",
            posi:"Marketing",
            salary:80000
        },
        {
             id: 3,
             name: "Aman",
             posi: "Designer",
             salary: 50000
         }
    ]

  return (
    <div style={{textAlign:'center'}}>
        <EmployeeList employee={employee}></EmployeeList>
    </div>
  )
}