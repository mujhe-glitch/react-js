import React from 'react'

export const MyTable = (props) => {
  return (
    <table className='table table-dark'>
        <thead>
            <tr>
                {
                    props.header.map((h)=>{
                        return<th>{h}</th>
                    })
                }
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
  )
}
