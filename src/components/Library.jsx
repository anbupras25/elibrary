import React, { useState } from 'react';
import './Library.css';
import {LibraryZone} from './LibraryZone';
import {useRef} from 'react';
import {Link} from 'react-router-dom'
import Marquee from "react-fast-marquee";

import {Header} from './Header';


const Library=()=>
{
    // const [showLibrary , setShowLibrary] = useState(false)
    // const handleLibraryPage=()=>{
    //     if(showLibrary===false)
    //     {
    //         setShowLibrary(true)
    //     }
    //     else
    //     {
    //         setShowLibrary(false)
            
    //     }
    // }
    const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
    
    
    return (
        <>
        
        <div className="main">
        {/* <img src="https://image.shutterstock.com/image-vector/illuminated-stage-lamp-light-spot-260nw-295988684.jpg"></img>
           */}
           
           <div className="navbar" > 
           <img src="https://www.nicepng.com/png/detail/246-2462622_visit-our-elibrary-e-library-logo-png.png" class="logo"/>
           {/* <Marquee >With New Arrivals!</Marquee> */}
           <Link  to='/elibrary/lib' ><p>LOG IN</p></Link>
           <img src="https://previews.123rf.com/images/tanyastock/tanyastock1803/tanyastock180300242/97334667-user-icon-human-person-symbol-avatar-login-sign-circle-button-with-soft-color-gradient-background.jpg" class='login'></img>
            {/* <select name="cars" id="cars" style={{border:'none'}}>
  <option value="volvo" hidden></option>
  <Link to="/elibrary/lib/Admin"><option value="volvo">Admin Login</option></Link>
</select> */}
<Link to="/elibrary/lib/Admin"><button>Admin Login</button></Link>
            
           
          
            </div> 
           
            <div class="content">
                <small>Welcome to</small>
                <h1>Largest<br/>Libraryzone</h1>
                <p>“The more that you read, the more things you will know”</p>
              
                <img src=" https://bestanimations.com/media/books/269909800page-turning-book-animation-2.gif"></img><br></br>
                {/* <button onClick={handleClick}>Take a Tour</button> */}

                {/* <button><Link  to='/elibrary/lib' style={{ textDecoration: 'none'}}>Sign in</Link></button> */}
                </div> 
                <div class="col">
                  <br></br>
                <div class="card card1"> </div>  
                <div class="card card2"> </div>  
                <br></br>
                <div class="card card3"> </div>  
                <div class="card card4"> </div> 
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
      

        {/* {showLibrary?:<></>} */}
        
{/* 
<div ref={ref} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80')`,color:"white"}}>
<LibraryZone></LibraryZone>
</div> */}

<div style={{height: '0rem'}} />

     
    
        
        </> 

    )
}
export default Library;