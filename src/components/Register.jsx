import React, { useState } from "react";
import ReactDOM from "react-dom";
import './Login.css';
import  axios from 'axios';
import {useNavigate} from "react-router-dom";



function Register() {
    const [data,setData]=useState({
        uname:"",
        lname:"",
        mail:"",
        no:"",
        pass:""

})
const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
   
}

//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
 const history=useNavigate();

  // User Login info
//   const database = [
//     {
//       username: "2012047@nec.edu.in",
//       password: "pras@2002"
//     },
//     {
//       username: "anbupras25@gmail.com",
//       password: "pras@2002"
//     }
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
       
//         // history('/elibrary/lib/zone');
//         setIsSubmitted(true);

//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
    // <div className="form">
    //   <form onSubmit={handleSubmit}>
    //     <div className="input-container">
    //       <label>Firstname </label>
    //       <input type="text" name="uname" required onChange={handleChange}  value={data.uname} />
    //       {renderErrorMessage("uname")}
    //     </div>
    //     <div className="input-container">
    //       <label>Lastname </label>
    //       <input type="text" name="lname" required onChange={handleChange}  value={data.lname}/>
    //       {renderErrorMessage("lname")}
    //     </div>
    //     <div className="input-container">
    //       <label>Email</label>
    //       <input type="text" name="mail" required onChange={handleChange}  value={data.mail}/>
    //       {renderErrorMessage("mail")}
    //     </div>
    //     <div className="input-container">
    //       <label>Phone no</label>
    //       <input type="text" name="no" required onChange={handleChange}  value={data.num} />
    //       {renderErrorMessage("no")}
    //     </div>
    //     <div className="input-container">
    //       <label>Password </label>
    //       <input type="password" name="pass" required onChange={handleChange}  value={data.pass}/>
    //       {renderErrorMessage("pass")}
    //     </div>
    //     <div className="button-container">
    //       <input type="submit" />
    //     </div>
    //   </form>
    // </div>
//   );
const submitForm=(e)=>{
    e.preventDefault();
    const sendData={
        uname:data.uname,
        lname:data.lname,
        email:data.mail,
        no:data.no,
        pass:data.pass,
    }
    console.log(sendData);
    axios.post('http://localhost/insert1.php',sendData).then((result)=>{
        // console.log(JSON.stringify(result.data.exist.status)+" is statusss");
        console.log(JSON.stringify(result.data.exist)+"is value");
        console.log(JSON.stringify(result)+" is statusss");
        if(result.data.exist.status==='true'){
         
          history('/elibrary/lib');
          alert("you have registered already,you can Login");
        }
        else if(result.data.Status=='invalid')
        {
          alert('Invalid User');
        }
        else
        {
          alert('Registered Succesfully');
          history('/elibrary/lib');
        }
    })
}

  return (
    <div className="app">
      
      <div className="content">
        
      <small>Welcome to</small>
                <h1>Largest<br/>Libraryzone</h1>
                </div>
      <div className="login-form">
        
      <div className="form">
      <div className="title">REGISTER</div>
      <form onSubmit={submitForm}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required onChange={handleChange}  value={data.uname} />
          <span style={{color:'red'}}>{data.uname.length<20 ? "" : "Maximum field length 20"}</span>
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Name </label>
          <input type="text" name="lname" required onChange={handleChange}  value={data.lname}/>
          <span style={{color:'red'}}>{data.lname.length<20 ? "" : "Maximum field length 20"}</span>
          {/* {renderErrorMessage("lname")} */}
        </div>
        <div className="input-container">
          <label>Email</label>
          <input type="text" name="mail" required onChange={handleChange}  value={data.mail}/>
          <span style={{color:'red'}}>{data.mail.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/) || data.mail.length===0 ?"":"invalid email"}</span>
          {/* {renderErrorMessage("mail")} */}
        </div>
        <div className="input-container">
          <label>Phone no</label>
          <input type="text" name="no" required onChange={handleChange}  value={data.no} />
          <span style={{color:'red'}}>{data.no.toString().match(/^[0-9]{10}$/) || data.no.length===0 ? "" : "Invalid phone no"}</span>
          {/* {renderErrorMessage("no")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required onChange={handleChange}  value={data.pass}/>
          <span style={{color:'red'}}>{data.pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) || data.pass.length===0 ? "" : "Please enter a strong password"}</span>
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
        
        
        {/* {isSubmitted ? <div>history.push('\\)</div> : renderForm} */}
      </div>
      
      
      <div class="flybooks">
                    <img src="https://i.pinimg.com/736x/b2/d7/b6/b2d7b6822281373a2254ef576e95c280--sweden-harry-potter-books.jpg"></img>
                    <img src="https://m.media-amazon.com/images/I/61BrpcGoILL.jpg"></img>
                    <img src="https://secure-ecsd.elsevier.com/covers/80/Tango2/large/9780750644167.jpg"></img>
                    <img src="https://m.media-amazon.com/images/I/61r4OIKZY3L._AC_UF1000,1000_QL80_.jpg"></img>
                    <img src="https://5.imimg.com/data5/SELLER/Default/2021/1/UV/OY/KC/114532903/capture-500x500.JPG"></img>
                    <img src="https://m.media-amazon.com/images/I/71uQ8VB99rL._AC_UF1000,1000_QL80_.jpg"></img>
                    <img src="https://i.pinimg.com/736x/14/3f/d3/143fd3f1ffecb199692d2e5905ca0962.jpg"></img>
                </div>
    </div>

  );
}

export default Register;