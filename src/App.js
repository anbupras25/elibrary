import logo from './logo.svg';
import './App.css';
import Library from './components/Library';
import Login from './components/Login';
import {BrowserRouter as Router,Route,Routes,Switch} from "react-router-dom"
import { LibraryZone } from './components/LibraryZone';
import { Counter } from './components/Counter';
import {Header} from './components/Header';
import Register from './components/Register';
import {Profile} from './components/Profile';
import Donate from './components/Donate';
import Forgot from './components/Forgot';
import Admin from './components/Admin';
import AdminHome from './components/AdminHome';
import AddUser from './components/AddUser';
import ViewUser from './components/ViewUser';
import AddBook from './components/AddBook';
import ViewBook from './components/ViewBook';
import EditUser from './components/EditUser'
import EditBook from './components/EditBook';


function App() {
  return (
    <Router>
    <div className="App">
   
     <Routes><Route exact path="/elibrary" element={<Library/>}></Route>
     {/* <Route path="/elibrary/lib/Admin/home/viewuser/user/:id/edit" element={<EditUser />} /> */}
     <Route exact path="/elibrary/lib" element={<Login/>}></Route>
     <Route exact path="/elibrary/lib/Admin" element={<Admin/>}></Route>
     <Route exact path="/elibrary/lib/Admin/home" element={<AdminHome/>}></Route>
     <Route exact path="/elibrary/lib/Admin/home/adduser" element={<AddUser/>}></Route>
     <Route exact path="/elibrary/lib/Admin/home/viewuser" element={<ViewUser/>}></Route>
     <Route exact path="/elibrary/lib/Admin/home/viewuser/user/:id/edit" element={<EditUser/>}></Route>
     <Route exact path="/elibrary/lib/Admin/home/viewbook/user/:id/edit" element={<EditBook/>}></Route>
     <Route exact path="/elibrary/lib/Admin/home/addbook" element={<AddBook/>}></Route>
     <Route exact path="/elibrary/lib/Admin/home/viewbook" element={<ViewBook/>}></Route>
     <Route exact path="/elibrary/lib/reg" element={<Register/>}></Route>
     <Route exact path="/elibrary/lib/reg/forgot" element={<Forgot/>}></Route>
     <Route exact path="/elibrary/lib/zone" element={<LibraryZone/>}></Route>
     <Route exact path="/elibrary/lib/zone/open" element={<Counter/>}></Route>
     <Route exact path="/elibrary/lib/zone/open/profile" element={<Profile/>}></Route>
     <Route exact path="/elibrary/lib/zone/open/donate" element={<Donate/>}></Route>
     </Routes>

    </div>
    </Router>
    // <div className="App">
    //   <Register/>
    //   </div>
  );
}

export default App;
