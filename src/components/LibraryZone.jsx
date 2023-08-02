import React, { useState, useEffect } from "react";
import { Pagination } from "./Pagination";
import data from "./data.json";
import "./LibraryZone.css";
import { Counter } from "./Counter";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import $ from "jquery";
import  axios from 'axios';

export const LibraryZone = () => {
  // const [students , setStudents] = useState({name:'', dept:'', id:''})
  const [details, setDetails] = useState([]);
  const history = useNavigate();
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(0);
  const [returnBook, setReturnBook] = useState(0);
  const [studentsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filte, setFilte] = useState([]);
  const [user, setUser] = useState([]);
  const [disablebooks, setDisableBooks] = useState([]);
  const location = useLocation();
  const dataa = location.state;
//   console.log("component", dataa);
//   console.log("details", details);
  // const [sort, setSort] = useState('asc')

  // const errorMsg = 'Please fill the above mandatory field'
  // const nameError = 'Alphabet only accepted'
  // const inputMsg = /^[A-Za-z]+$/
  useEffect(() => {
    // setDetails(data.library)
    fetching();
    setFilter("");
    fetchUser();
   
  }, []);
 
  const fetching = () => {
    fetch("http://localhost/retrive.php")
      .then((response) => {
       // console.log(response);
        return response.json();
      })
      .then((result) => {
        // Work with JSON data here
        //console.log(result);
        setDetails(result);
      })
      .catch((err) => {
        // Do something for an error here
        //console.log("Error Reading data " + err);
      });
  };

  
const fetchUser = () => {
  fetch("http://localhost/profilere.php")
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .then((result) => {
      // Work with JSON data here
      //console.log(result);
     
      setUser(result);
    })
    .catch((err) => {
      // Do something for an error here
      //console.log("Error Reading data " + err);
    });
};
  const a=user.filter((k)=>{
    if(k?.uname===dataa?.uname){
      return  k.booksborrowed.split(",")
    }
  }) 
  // console.log('avalue',a?.at(0)?.booksborrowed?.split(",").some((x)=>x==="Eragon"));
  // console.log('books',count);
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [showBook, setShowBook] = useState(false);
  const lastStudentId = currentPage * studentsPerPage;
  const firstStudentId = lastStudentId - studentsPerPage;
  const currentStudents = details.slice(firstStudentId, lastStudentId);
  const filteredAll = details.filter((e) => {
    return (
      e?.author?.includes(filter) ||
      e?.title?.includes(filter) ||
      e?.subject?.includes(filter) ||
      e?.publishDate?.includes(filter)
    );
  });
  const filteredAuthor = details.filter((e) => {
    return e?.author?.includes(filter);
  });
  const filteredTitle = details.filter((e) => {
    return e?.title?.includes(filter);
  });
  const filteredSubject = details.filter((e) => {
    return e?.subject?.includes(filter);
  });
  const filteredDate = details.filter((e) => {
    return e?.publishDate?.includes(filter);
  });
  const getAuthorCount = () => {
    let authorCountMessage = "";
    if (filteredAuthor.length === 0 && filter === "") {
      authorCountMessage = "";
    }
    // if(filteredAuthor.length===0 && filter!=="" )
    // {
    //     authorCountMessage="No matches Found"
    // }
    if (filteredAuthor.length > 0 && filter !== "") {
      authorCountMessage = `Your search is matched with  ${filteredAuthor.length} authors`;
    }
    return authorCountMessage;
  };
  const getTitleCount = () => {
    let titleCountMessage = "";
    if (filteredTitle.length === 0 && filter === "") {
      titleCountMessage = "";
    }
    // if(filteredTitle.length===0 && filter!=="" )
    // {
    //     titleCountMessage="No matches Found"
    // }
    if (filteredTitle.length > 0 && filter !== "") {
      titleCountMessage = `Your search is matched with ${filteredTitle.length} titles`;
    }
    return titleCountMessage;
  };
  const getSubjectCount = () => {
    let subjectCountMessage = "";
    if (filteredSubject.length === 0 && filter === "") {
      subjectCountMessage = "";
    }
    // if(filteredSubject.length===0 && filter!=="" )
    // {
    //     subjectCountMessage="No matches Found"
    // }
    if (filteredSubject.length > 0 && filter !== "") {
      subjectCountMessage = `Your search is matched with ${filteredSubject.length} subjects`;
    }
    return subjectCountMessage;
  };
  const getDateCount = () => {
    let dateCountMessage = "";
    if (filteredDate.length === 0 && filter === "") {
      dateCountMessage = "";
    }
    if (
      filteredSubject.length === 0 &&
      filteredTitle.length == 0 &&
      filteredAuthor.length == 0 &&
      filteredDate.length == 0 &&
      filter !== ""
    ) {
      dateCountMessage = "No matches Found";
    }
    if (filteredDate.length > 0 && filter !== "") {
      dateCountMessage = `Your search is matched with ${filteredDate.length} publish dates`;
    }
    return dateCountMessage;
  };

  const handleSearch = (i) => {
    setFilte(filteredAll[i]);
    // history('/elibrary/lib/zone/open');
  };
  var intials = dataa?.uname?.slice(0, 1);
  // console.log('initials',intials);
  var profileImage = $("#profileImage").text(intials);

  const paginate = (num) => {
    setCurrentPage(num);
};
  const update=(name1,value)=>{
    const sendData={
      value:value,
      name1:name1,
    }
  
    axios.post('http://localhost/update.php',sendData).then((result)=>{
          // console.log(JSON.stringify(result.data.exist.status)+" is statusss");
          // console.log(JSON.stringify(result)+" is statusss");
          if(result.data.exist.status=="true"){
           
            // history('/elibrary/lib/zone',{state:data});
            // alert(" changed");
            
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
    // console.log(sendData);
  }

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(details.length / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

// console.log("user",user);
// console.log("disablebooks",disablebooks);
  return (
    <div class="hi" style={{width:'100%'}}>
      <div class="nav">
        <div class="link1">
          <Link
            to="/elibrary"
            style={{
              textDecoration: "none",
              padding: "5px",
              color: "white",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
        </div>

        <Link to="/elibrary/lib/zone/open/profile" state={{dataa,count,returnBook,a}}>
          <div id="profileImage">{dataa?.uname}</div>
        </Link>
        <div class="link">
          <Link
            to="/elibrary/lib/zone"
            style={{
              textDecoration: "none",
              padding: "5px",
              color: "black",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            books
          </Link>
        </div>
        <p>{dataa?.uname}</p>
        <Link to="/elibrary/lib/zone/open/donate">
          <button class="donate">Donate</button>
        </Link>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => setFilter(e.target.value)}
      />
      <h2>Welcome {dataa?.uname}...!</h2>

      <div class="result">{getAuthorCount()}</div>
      <div class="result">{getTitleCount()} </div>
      <div class="result">{getSubjectCount()} </div>
      <div class="result">{getDateCount()}</div>
      {/* <div className="tb">
            <table border="1" style={{marginTop:'30px'}}> */}
      {/* <thead>
                    <tr>
                        <th >TITLE</th>
                        <th>AUTHOR </th>
                        <th>SUBJECT</th>
                        <th>PUBLISHDATE</th>
                        <th>Front view</th>
                        <th>book pdf</th>
                    </tr>
                </thead> */}
      {/* <tbody> */}
      <div class="flex-container">
    
      {filter === ""
        ? currentStudents &&
          currentStudents.length > 0 &&
          currentStudents
            .filter((stu) => {
              if (filter === "") {
                return stu;
              } else if (
                stu.title.toLowerCase()?.includes(filter.toLowerCase()) ||
                stu.author.toLowerCase()?.includes(filter.toLowerCase()) ||
                stu.subject.toLowerCase()?.includes(filter.toLowerCase()) ||
                stu.publishDate.toLowerCase()?.includes(filter.toLowerCase())
              ) {
                return stu;
              }
              return null;
            })
            
            .map((stu, index) => (
            //  
                
                
                  <div class="anbu">
                    <img
                      src={stu.image}
                      alt="image not found"
                      style={{ width: "300px", height: "350px" }}
                    />
                    {/* {console.log('booksdeatils',getBorrowedBookDetails().at(5)==='The blade itself')}
                    {console.log('title',stu.title)} */}
                    
                    <div class="container1">
                      <h4>
                        <b>{stu.title}</b>
                      </h4>
                      <p>Author: {stu.author}</p>
                      <p>Subject: {stu.subject}</p>
                      <p>{stu.publishDate}</p>
                      <button
                        // style={{ marginLeft: "1rem",marginTop:"2rem" }}
                        type="button"
                       disabled={a?.at(0)?.booksborrowed?.split(",")?.some((x)=>x===stu.title)} 
                       onClick={() => {
                          handleSearch(index);
                          setShowBook(true);
                          handleClick();
                          setCount(count+1);
                          update(stu.title,dataa.uname);
                        }}
                      >
                        borrow
                      </button>
                      <br></br>
                    </div>
                    
               </div>
               
            ))
            
            
        : details &&
          details.length > 0 &&
          details
            .filter((stu) => {
              
              if (filter === "") {
                return stu;
              } else if (
                stu.title.toLowerCase()?.includes(filter.toLowerCase()) ||
                stu.author.toLowerCase()?.includes(filter.toLowerCase()) ||
                stu.subject.toLowerCase()?.includes(filter.toLowerCase()) ||
                stu.publishDate.toLowerCase()?.includes(filter.toLowerCase())
              ) {
                return stu;
              }
            })
            .map((stu, index) => (
              // <div className="flex-container">
               
              
                  <div className="anbu">
                    <img
                      src={stu.image}
                      alt="image not found"
                      style={{ width: "300px", height: "350px" }}
                    />
                    <div class="container1">
                      <h4>
                        <b>{stu.title}</b>
                      </h4>
                      <p>Author: {stu.author}</p>
                      <p>Subject: {stu.subject}</p>
                      <p>{stu.publishDate}</p>
                      <button
                        type="button"
                        disabled={a?.at(0)?.booksborrowed?.split(",")?.some((x)=>x===stu.title)}  
                        onClick={() => {
                          handleSearch(index);
                          setShowBook(true);
                          handleClick();
                          setCount(count+1);
                          update(stu.title,dataa.uname);
                        }}
                      >
                        borrow
                      </button>
                    </div>
                  </div>
                
              /* </div> */
            ))}
</div>
     
      <nav>
        <ul>
          {pageNumbers.map((num) => {
            return (
              <button style={{ marginRight: "2px" }}>
                <a
                  onClick={() => paginate(num)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "5px",
                    width: "6px",
                  }}
                >
                  {num}
                </a>
              </button>
            );
          })}
        </ul>
      </nav>
      <div style={{ height: "35rem" }} />
      <div ref={ref}>
        {showBook ? <Counter data={filte} setShowBook={setShowBook} returnBook={returnBook}  setReturnBook={setReturnBook}/> : <></>}
      </div>
      <div style={{ height: "35rem" }} />
      {/* <div class="flybooks">
                    <img src="https://i.pinimg.com/736x/b2/d7/b6/b2d7b6822281373a2254ef576e95c280--sweden-harry-potter-books.jpg"></img>
                    <img src="https://m.media-amazon.com/images/I/61BrpcGoILL.jpg"></img>
                    <img src="https://secure-ecsd.elsevier.com/covers/80/Tango2/large/9780750644167.jpg"></img>
                    <img src="https://m.media-amazon.com/images/I/61r4OIKZY3L._AC_UF1000,1000_QL80_.jpg"></img>
                    <img src="https://5.imimg.com/data5/SELLER/Default/2021/1/UV/OY/KC/114532903/capture-500x500.JPG"></img>
                    <img src="https://m.media-amazon.com/images/I/71uQ8VB99rL._AC_UF1000,1000_QL80_.jpg"></img>
                    <img src="https://i.pinimg.com/736x/14/3f/d3/143fd3f1ffecb199692d2e5905ca0962.jpg"></img>
                </div> */}
    {/* </div> */}
    </div>
  );
};

// map(() => {}) to map(() => ())
// npx json-server --watch db.json
//onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
