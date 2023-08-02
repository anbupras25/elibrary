import React, { useState } from "react";
import ReactDOM from "react-dom";
import './Login.css';
import {useNavigate,Link} from "react-router-dom";
import  axios from 'axios';



function Forgot() {
  const history=useNavigate();
  const [data,setData]=useState({
    uname:"",
    pass1:"",
    pass:""

})
const handleChange=(e)=>{
setData({...data,[e.target.name]:e.target.value});

}

    const submitForm=(e)=>{
      e.preventDefault();
      const sendData={
          uname:data.uname,
          pass1:data.pass1,
      }
      console.log(sendData);
      axios.post('http://localhost/forgot.php',sendData).then((result)=>{
          // console.log(JSON.stringify(result.data.exist.status)+" is statusss");
          console.log(JSON.stringify(result)+" is statusss");
          if(result.data.exist.status=="true"){
           
            // history('/elibrary/lib/zone',{state:data});
            alert("password changed");
            history('/elibrary/lib');
          }
          // else if(result.data.Status=='invalid')
          // {
          //   alert('Invalid User');
          // }
          else
          {
            alert('Invalid Credentials');
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
      <div className="title">RESET PASSWORD</div>
      <div className="form">
      <form onSubmit={submitForm}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required onChange={handleChange}  value={data.uname} />
         
        </div>
        <div className="input-container">
          <label>New Password </label>
          <input type="password" name="pass" required onChange={handleChange}  value={data.pass}/>
         
        </div>
        <div className="input-container">
          <label>Retype Password </label>
          <input type="password" name="pass1" required onChange={handleChange}  value={data.pass1}/>
          <span style={{color:'red'}}>{data.pass===data.pass1 || data.pass1.length===0 ? "" : "Password doesnot match"}</span>
         
        </div>
        <div className="button-container">
          <input type="submit" />
         
        </div>
      </form>
      {/* <br></br>
     <p> if you are a new user <Link to='/elibrary/lib/reg'>Register</Link> </p>
      <p><Link to='/elibrary/lib/reg'>Forgot Password?</Link></p> */}
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

export default Forgot;