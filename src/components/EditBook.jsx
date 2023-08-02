//C:\react\demo-project\src\components\EditUser.js
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
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
      .get(`http://localhost/react/api/anbu.php/${id}`)
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
    data["title"]= inputs.title;
    data["author"]= inputs.author;
    data["subject"]= inputs.subject;
    data["publishDate"]=inputs.publishDate;
    data["id"]= id;
    console.log("ithan anupa poren "+JSON.stringify(data));
    event.preventDefault();
    axios
      .put(`http://localhost/react/api/anbu.php/${id}/edit`, data)
      .then(function (response) {
        console.log("hehe"+JSON.stringify(response));
        navigate("/elibrary/lib/Admin/home/viewbook");
      });
  };
  return (
    <div className="row" style={{color:'white'}}>
      <div className="col-2"></div>
    
      <div className="col-8">
        <h1>Edit Book</h1>
        <br></br>
    
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label>Title: </label>
            <input
              type="text"
              value={inputs.title}
              className="form-control"
              name="title"
              onChange={handleChange}
            />
          
          </div>
          <br></br>
        
          <div className="mb-3">
           <label>Author: </label>
           
            <input
              type="text"
              value={inputs.author}
              className="form-control"
              name="author"
              onChange={handleChange}
            />
           
          </div>
          <br></br>
          <div className="mb-3">
           <label>Subject: </label>
           
            <input
              type="text"
              value={inputs.subject}
              className="form-control"
              name="subject"
              onChange={handleChange}
            />
           
          </div>
          <br></br>
          <div className="mb-3">
           <label>Publish date: </label>
           
            <input
              type="text"
              value={inputs.publishDate}
              className="form-control"
              name="publishDate"
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
export default EditBook;
