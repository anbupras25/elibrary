import React, { useState } from 'react';
import './Library.css';
import {LibraryZone} from './LibraryZone';
import {useRef} from 'react';


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
          
          
            </div> 
           
            <div class="content">
                <small>Welcome to</small>
                <h1>Largest<br/>Libraryzone</h1>
                <p>“The more that you read, the more things you will know”</p>
              
                <img src=" https://bestanimations.com/media/books/269909800page-turning-book-animation-2.gif"></img><br></br>
                <button onClick={handleClick}>Take a Tour</button>
                </div> 
                <div class="col">
                <div class="card card1"> </div>  
                <div class="card card2"> </div>  
                <br></br>
                <div class="card card3"> </div>  
                <div class="card card4"> </div> 
                </div> 
                
        </div>
      

        {/* {showLibrary?:<></>} */}
        <div style={{height: '0rem'}} />

<div ref={ref} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80')`,color:"white"}}>
<LibraryZone></LibraryZone>
</div>

<div style={{height: '0rem'}} />

     
    
        
        </> 

    )
}
export default Library;