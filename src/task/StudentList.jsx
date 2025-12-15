import React from 'react'

export const StudentList = (props) => {
    console.log("StudentList props:", props)

  return (
    <div>
            <h1>STUDENT LIST</h1>
        
        <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Standard</th>
                <th>Percentage</th>
                <th>Action</th>
              </tr>
            </thead>
            
            <tbody>
                {props.students.map((stu) => (
                    <tr>
                        <td>{stu.id}</td>
                        <td>{stu.name}</td>
                        <td>{stu.age}</td>
                        <td>{stu.std}</td>
                        <td>{stu.perc}</td>
                        <td>
                        <button onClick={() => props.info(stu.id)}>Info</button>
                        </td>
                    </tr>
                ))}
            </tbody>   
        </table>
    </div>
  )
}