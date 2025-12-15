import axios from 'axios';
import React, { useState } from 'react';
import { Loader } from '../component/Loader';

export const ApiDemo3 = () => {

  const [pro, setPro] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadPro = async () => {
    setIsLoading(true);
    const res = await axios.get("https://node5.onrender.com/product/getall");
    setPro(res.data.data);
    setIsLoading(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Api demo 3</h1>

      <button onClick={loadPro}>get data</button>

      {isLoading && <Loader />}

      {pro.length > 0 && (
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>Product id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Colors</th>
              <th>Available</th>
              <th>Unit</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {pro.map((p) => (
              <tr key={p._id}>
                <td>{p._id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.colors.length > 0 ? p.colors.join(", ") : "No color"}</td>
                <td>{p.isAvailable ? "yes" : "no"}</td>
                <td>{p.unit}</td>
                <td>{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
