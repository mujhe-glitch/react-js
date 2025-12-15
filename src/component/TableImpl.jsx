import React from 'react'
import { MyTable } from '../common/MyTable'

export const TableImpl = () => {
    const books =[
        {id:101,name:"Java",price:200,rating:7.9,publishYear:2004},
        {id:102,name:"c++",price:300,rating:4.6},
        {id:103,name:"Python",price:250,rating:9.0},
    ]
    const user = {
    id:1,name:"ab",age:23,status:1
   }
  return (
    <div>
        <h1>Table Implementation</h1>
        <MyTable header={Object.keys(books[0])}></MyTable>
    </div>
  )
}
