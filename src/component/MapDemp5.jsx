import React from 'react'

export const MapDemp5 = () => {
    var products = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 599,
      qty: 2,
      color: "Black",
      stock: 120,
      status: true,
      category: "Electronics",
    },
    {
      d: 2,
      name: "Bluetooth Headphones",
      price: 1499,
      qty: 1,
      color: "Blue",
      stock: 45,
      status: true,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Water Bottle",
      price: 299,
      qty: 3,
      color: "Red",
      stock: 200,
      status: true,
      category: "Home & Kitchen",
    },
    {
      id: 4,
      name: "Gaming Keyboard",
      price: 2499,
      qty: 1,
      color: "Red",
      stock: 15,
      status: false,
      category: "Electronics",
    },
    {
      id: 5,
      name: "Running Shoes",
      price: 1999,
      qty: 2,
      color: "White",
      stock: 60,
      status: true,
      category: "Fashion",
    },
  ];

  return (
    <div>
        <h1>Map Demo 5</h1>
        <table className='table table-dark'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Color</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((pro)=>{
                    return(
                        <tr>
                            <td>{pro.id}</td>
                            <td>{pro.name}</td>
                            <td style={{color:pro.price>2000 && "red"}}>{pro.price}</td>
                            {
                                pro.price < 500 && " cheap"
                            }
                            <td>{pro.qty}</td>
                            <td style={{color:pro.color}}>{pro.color}</td>
                            <td style={{color:pro.stock<=50 && "yellow"}}>{pro.stock}</td>
                            <td>{pro.status==true?"true":"false"}</td>
                            <td>{pro.category}</td>
                        </tr>
                    )
                })
            }
        </tbody>
        </table>
    </div>
  )
}
