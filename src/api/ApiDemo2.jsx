import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const ApiDemo2 = () => {
  const [users, setUsers] = useState([]);
  const [highlightId, setHighlightId] = useState(null);

  const location = useLocation();
  const updatedUserId = location.state?.updatedUserId;

  const rowRefs = useRef({});

  const getUsers = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    setUsers(res.data.data);
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    if (res.status === 204) {
      alert("User deleted successfully!");
      getUsers();
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (updatedUserId && rowRefs.current[updatedUserId]) {
      rowRefs.current[updatedUserId].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      setHighlightId(updatedUserId);

      setTimeout(() => {
        setHighlightId(null);
      }, 2000);
    }
  }, [users]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 2</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id} ref={(el) => (rowRefs.current[user._id] = el)}
              style={{backgroundColor: highlightId === user._id ? "grey" : "", color: highlightId === user._id ? "black" : "",
              transition: "background-color 0.5s ease",}}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.isActive ? "true" : "false"}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>DELETE</button>
                <Link to={`/UpdateUser/${user._id}`} className="btn btn-warning" style={{ marginLeft: "5px" }}>UPDATE</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
