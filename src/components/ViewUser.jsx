import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";

function ViewUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost/react/api/indexx.php").then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost/react/api/indexx.php/${id}/delete`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      })
      .then(function (response) {
        console.log(response.data);
        getUsers();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
        <AdminHome/>
        <h3 style={{color:'white'}}>Users List</h3>
    <div className="row">
      <div className="col-12">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>name</th>
              <th>mail</th>
              <th>no</th>
              <th>pass</th>
              <th>BooksBorrowed</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>{user.uname}</td>
                <td>{user.lname}</td>
                <td>{user.mail}</td>
                <td>{user.no}</td>
                <td>{user.pass}</td>
                <td>{user.booksborrowed}</td>
                {/* <td>{user.id}</td> */}

                <td>
                  <Link
                    to={`user/${user.id}/edit`}
                    className="btn btn-success"
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
export default ViewUser;
