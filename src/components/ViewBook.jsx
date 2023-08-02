import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";

function ViewBook() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost/react/api/anbu.php").then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost/react/api/anbu.php/${id}/delete`, {
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
        <h3 style={{color:'white'}}>Books List</h3>
    <div className="row">
      <div className="col-12">
        <table style={{marginLeft:'300px'}}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>subject</th>
              <th>PublishDate</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>{user.title}</td>
                <td>{user.author}</td>
                <td>{user.subject}</td>
                <td>{user.publishDate}</td>
                {/* <td>{user.id}</td> */}

                <td>
                  <Link
                    to={`user/${user.id}/edit`}
                    className="btn btn-success"
                    style={{ marginRight: "10px" ,backgroundColor:'Green',textDecoration:'none',color:'white',height:'600px'}}
                  >
                    Edit
                  </Link>
                  <br></br>
                  <br></br>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-danger"
                    style={{backgroundColor:'red'}}
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
export default ViewBook;
