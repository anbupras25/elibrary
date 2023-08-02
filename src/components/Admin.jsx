import React, { useState } from 'react';
import './Admin.css'
import {Link} from "react-router-dom";

function Admin()
{
   const [data,setData]=useState({
        pass:""
    
    })
    const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
    }
    console.log(data);
    return(
  // {/* <div class="form"> */}
  //   {/* <form class="register-form">
  //     <input type="text" placeholder="name"/>
  //     <input type="password" placeholder="password"/>
  //     <input type="text" placeholder="email address"/>
  //     <button>create</button>
  //     <p class="message">Already registered? <a href="#">Sign In</a></p>
  //   </form> */}

  
    <div class="container">
    <div class="bubbles">
      
      
      <span style={{"--i":11}}></span>
      <span style={{"--i":12}}></span>
      <span style={{"--i":17}}></span>
      <span style={{"--i":18}}></span>
      <span style={{"--i":20}}></span>
      <span style={{"--i":17}}></span>
      <span style={{"--i":14}}></span>
      <span style={{"--i":24}}></span>
      <span style={{"--i":13}}></span>
      <span style={{"--i":24}}></span>
      <span style={{"--i":15}}></span>
      <span style={{"--i":11}}></span>
      <span style={{"--i":12}}></span>
      <span style={{"--i":17}}></span>
      <span style={{"--i":18}}></span>
      <span style={{"--i":20}}></span>
      <form>
        
      <input type="password" placeholder="Enter  pin" name="pass"  onChange={handleChange}  value={data.pass} style={{marginTop:'300px'}}/>
      <br></br>
      <p style={{color:'white'}}>Enter the pin to proceed</p>
      <small style={{color:'white'}}>{data.pass==="123456" || data.pass.length===0 ? "" : "Pin doesnot match"}</small>
      <br></br>
      <br></br>
      
     <Link to="/elibrary/lib/Admin/home/adduser"><button>Proceed</button></Link>
    </form>
     
      <span style={{"--i":17}}></span>
      <span style={{"--i":14}}></span>
      <span style={{"--i":24}}></span>
      <span style={{"--i":13}}></span>
      <span style={{"--i":24}}></span>
      <span style={{"--i":15}}></span>
      <span style={{"--i":11}}></span>
      <span style={{"--i":12}}></span>
      <span style={{"--i":17}}></span>
      <span style={{"--i":18}}></span>
      <span style={{"--i":20}}></span>
      
      <span style={{"--i":17}}></span>
      <span style={{"--i":14}}></span>
      <span style={{"--i":24}}></span>
      <span style={{"--i":13}}></span>
      <span style={{"--i":24}}></span>
      <span style={{"--i":15}}></span>
      
      

      </div>
    {/* </div>
            <div class="login-page">
  {/* <div class="form"> */}
    {/* <form class="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form> */}
    {/* <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <form class="login-form">
        
      <input type="password" placeholder="Enter  pin" name="pass"  onChange={handleChange}  value={data.pass}/>
      <br></br>
      <span style={{color:'red'}}>{data.pass==="123456" || data.pass.length===0 ? "" : "Pin doesnot match"}</span>
      <br></br>
      <br></br>
     <Link to="/elibrary/lib/Admin/home/adduser"><button>Proceed</button></Link>
    </form> */}
  </div>
            
        // </div>
    )

}
export default Admin;