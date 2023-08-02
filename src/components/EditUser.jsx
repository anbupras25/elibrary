//C:\react\demo-project\src\components\EditUser.js
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);
  // let [uname,setUname] = useState("");
  // let [lname,setLname] = useState("");
  // let [mail,setMail] = useState("");
  // let [no,setNo] = useState("");
  // let [pass,setPass] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    axios
      .get(`http://localhost/react/api/indexx.php/${id}`)
      .then(function (response) {
        console.log(response.data);
        setInputs(response.data);
      });
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
    console.log("onchangee"+JSON.stringify(inputs));
  };
  const handleSubmit = (event) => {
    let data={};
    data["uname"]= inputs.uname;
    data["lname"]= inputs.lname;
    data["mail"]= inputs.mail;
    data["no"]=inputs.no;
    data["pass"]=inputs.pass;
    data["id"]= id;
    console.log("ithan anupa poren "+JSON.stringify(data));
    event.preventDefault();
    axios
      .put(`http://localhost/react/api/indexx.php/${id}/edit`, data)
      .then(function (response) {
        console.log("hehe"+JSON.stringify(response));
        navigate("/elibrary/lib/Admin/home/viewuser");
      });
  };
  return (
    <div className="row" style={{color:'white'}}>
      <div className="col-2"></div>
    
      <div className="col-8">
        <h1>Edit user</h1>
        <br></br>
    
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label>Username: </label>
            <input
              type="text"
              value={inputs.uname}
              className="form-control"
              name="uname"
              onChange={handleChange}
            />
          
          </div>
          <br></br>
        
          <div className="mb-3">
           <label>name: </label>
           
            <input
              type="text"
              value={inputs.lname}
              className="form-control"
              name="lname"
              onChange={handleChange}
            />
           
          </div>
          <br></br>
          <div className="mb-3">
           <label>mail: </label>
           
            <input
              type="text"
              value={inputs.mail}
              className="form-control"
              name="mail"
              onChange={handleChange}
            />
           
          </div>
          <br></br>
          <div className="mb-3">
           <label>no: </label>
           
            <input
              type="text"
              value={inputs.no}
              className="form-control"
              name="no"
              onChange={handleChange}
            />
           
          </div>
        
          <br></br>
          
          <div className="mb-3">
           <label>pass: </label>
           
            <input
              type="text"
              value={inputs.pass}
              className="form-control"
              name="pass"
              onChange={handleChange}
            />
           
          </div>
          <br></br>
       
          <button type="submit" name="update" className="btn btn-primary">
            Save
          </button>
         
        </form>
       
      </div>
    <div className="col-2"></div>
     
    </div>
  );
}
export default EditUser;
