import React from 'react';
import './Profile.css';
import {Link} from "react-router-dom";
function AdminHome()
{
    return(
        <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      elibrary
    </div>
  </div>
 
  <div class="nav-links">
    <Link to="/elibrary/lib/Admin/home/adduser">Add users</Link>
    <Link to="/elibrary/lib/Admin/home/viewuser">view users</Link>
    <Link to="/elibrary/lib/Admin/home/addbook">Add book</Link>
    <Link to="/elibrary/lib/Admin/home/viewbook">view books</Link>
    <Link to='/elibrary'><p><button>LOG OUT</button></p></Link>
    
  </div>
</div>
        
    )

}
export default AdminHome;