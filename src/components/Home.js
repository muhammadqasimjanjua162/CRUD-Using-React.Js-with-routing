import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    LoadUser();
  }, []);
  const LoadUser = async () => {
    const result = await axios.get("http://localhost:4000/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/users/${id}`);
    LoadUser();
  };
  return (
    <div className="conatiner">
      <div className="py-4">
        <h3>Home Page</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={"/"} className="btn btn-primary mx-2">
                    View
                  </Link>
                  <Link
                    to={`/users/edit/${user.id}`}
                    className="btn btn-primary mx-2 "
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/`}
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
