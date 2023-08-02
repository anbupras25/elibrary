import React ,{ useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import $ from 'jquery';


export const Profile=()=> {
    const location = useLocation();
const {dataa} = location?.state;
const {a}=location?.state;
// const {count} = location?.state;
const {returnBook} = location?.state;
// const bookCount=location.bookCount;
console.log('count',dataa);
var intials = dataa?.uname.slice(0,1);
var profileImage = $('#profileImage').text(intials);
const [details,setDetails]=useState([])
const [books,setBooks]=useState([])

const fetching = () => {
    fetch("http://localhost/profilere.php",dataa)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        // Work with JSON data here
        console.log(result);
       
        setDetails(result);
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  };
  
  // const booksDetails=()=>{
    
   
  
  //   // return noOfBooksBorrowed;
  // }
  console.log('books',books);

  useEffect(() => {
    // setDetails(data.library)
    // booksDetails();
    fetching();
    details.filter((e)=>{
      if(e?.uname===dataa.uname)
      {
        setBooks(e?.booksborrowed?.split(","));
       
        console.log('booksboorowed',e?.booksborrowed);
      }
    })
    
  }, []);
  

console.log("avlt",a);
    return(
        <div>
            <div class="nav">
            <div class="link1" ><Link to='/elibrary' style={{ textDecoration: 'none',padding:'5px',color:'white',fontSize:'15px',fontWeight:'bold' }}>Home</Link></div>
                
                 <div id="profileImage"></div>
                 <div class="link"  ><Link to='/elibrary/lib/zone' style={{ textDecoration: 'none',padding:'5px',color:'black',fontSize:'15px',fontWeight:'bold' }}>books</Link></div>
                 <p>{dataa?.uname}</p>
                 </div>
                 
                <div style={{backgroundColor:'white',width:'50%',marginLeft:'320px',height:'700px'}}> 
                <h2 style={{textAlign:'center'}}>User Profile Card</h2>
               

  <img src="https://st.depositphotos.com/1537427/3571/v/600/depositphotos_35716051-stock-illustration-user-icon-vector.jpg" alt="John" style={{width:'200px',borderRadius:'50%'}}/>
  <h1>{dataa?.uname}</h1>
  <p>No of Books Borrowed :{a?.at(0)?.booksborrowed?.split(",").length-1}</p>
  <p> Books Borrowed are:</p>
  {a?.at(0)?.booksborrowed?.split(",").map((i)=>(<div>{i}</div>))}
 
  <div style={{margin: '24px 0'}}>
  </div>
  <Link to='/elibrary'><p><button>LOG OUT</button></p></Link>
</div>
        </div>
    );
}
