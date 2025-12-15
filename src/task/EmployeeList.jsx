import React from 'react'

export const EmployeeList = (props) => {
    console.log("props: ",props);

  return (
    <div style={{textAlign:'center'}}>
        <h1>EmployeeList</h1>
        <table border="1" className='table table-striped table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>POSITION</th>
                    <th>SALARY</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employee.map((emp)=>(
                    <tr >
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.posi}</td>
                        <td>{emp.salary}</td>
                    </tr>
                     ))
                }
          </tbody>
        </table>

    </div>
)
}