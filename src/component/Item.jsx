import React, { useState } from 'react'

export const Item = () => {
    const [items,setItems] = useState([
        {id:1,name:"asus",price:50000,qty:5,instock:true},
        {id:2,name:"vivo",price:60000,qty:0,instock:false},
        {id:3,name:"apple",price:1000,qty:5,instock:true}

    ])
  return (
    <div>
        <h2>Item List</h2>
        <table className='table table-striped table-dark'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>In stock</th>
                </tr>
            </thead>
            {items.map((item)=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                    <td>{item.instock ? "Yes" : "No"}</td>
                </tr>
            ))}
        </table>
    </div>
  )
}
