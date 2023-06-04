import React, { useState, useEffect } from 'react';
import {Pagination} from './Pagination';
import data from './data.json';

export const LibraryZone=()=> {

// const [students , setStudents] = useState({name:'', dept:'', id:''})
const [details , setDetails] = useState([])
const [filter , setFilter] = useState('')
const [studentsPerPage] = useState(10)
const [currentPage , setCurrentPage] = useState(1)
// const [sort, setSort] = useState('asc')

// const errorMsg = 'Please fill the above mandatory field'
// const nameError = 'Alphabet only accepted'
// const inputMsg = /^[A-Za-z]+$/

useEffect(() => {
    setDetails(data.library)
    setFilter('')
}, [])



const lastStudentId = currentPage * studentsPerPage;
const firstStudentId = lastStudentId - studentsPerPage;
const currentStudents = details.slice(firstStudentId,lastStudentId)
const  filteredAuthor=details.filter((e)=>{
   return e.author?.includes(filter)
})
const  filteredTitle=details.filter((e)=>{
    return e?.title?.includes(filter)
 })
 const  filteredSubject=details.filter((e)=>{
    return  e?.subject?.includes(filter)
 })
 const  filteredDate=details.filter((e)=>{
    return e?.publishDate?.includes(filter)
 })
const getAuthorCount=()=>{
    let authorCountMessage="";
    if(filteredAuthor.length===0 && filter==="" )
    {
        authorCountMessage=""
    }
    // if(filteredAuthor.length===0 && filter!=="" )
    // {
    //     authorCountMessage="No matches Found"
    // }
    if(filteredAuthor.length>0 && filter!=="" )
    {
        authorCountMessage=`Your search is matched with  ${filteredAuthor.length} authors`
    }
    return authorCountMessage;
}
const getTitleCount=()=>{
    let titleCountMessage="";
    if(filteredTitle.length===0 && filter==="" )
    {
        titleCountMessage=""
    }
    // if(filteredTitle.length===0 && filter!=="" )
    // {
    //     titleCountMessage="No matches Found"
    // }
    if(filteredTitle.length>0 && filter!=="" )
    {
        titleCountMessage=`Your search is matched with ${filteredTitle.length} titles`
    }
    return titleCountMessage;
}
const getSubjectCount=()=>{
    let subjectCountMessage="";
    if(filteredSubject.length===0 && filter==="" )
    {
        subjectCountMessage=""
    }
    // if(filteredSubject.length===0 && filter!=="" )
    // {
    //     subjectCountMessage="No matches Found"
    // }
    if(filteredSubject.length>0 && filter!=="" )
    {
        subjectCountMessage=`Your search is matched with ${filteredSubject.length} subjects`
    }
    return subjectCountMessage;
}
const getDateCount=()=>{
    let dateCountMessage="";
    if(filteredDate.length===0 && filter==="" )
    {
        dateCountMessage=""
    }
    if(filteredSubject.length===0 && filteredTitle.length==0 && filteredAuthor.length==0 && filteredDate.length==0 && filter!=="" )
    {
        dateCountMessage="No matches Found"
    }
    if(filteredDate.length>0 && filter!=="" )
    {
        dateCountMessage=`Your search is matched with ${filteredDate.length} publish dates`
    }
    return dateCountMessage;
}



const paginate = (num) => {
    setCurrentPage(num)
}

const pageNumbers = [];

for (let i = 1; i <= Math.ceil(details.length/studentsPerPage); i++) {
    pageNumbers.push(i);
}

console.log('stu',currentStudents)
    return (
  
        <div>
            
            <input type="text" placeholder="Search.." onChange={(e)=>setFilter(e.target.value)}/>
            <h2>Welcome to Open Library</h2>
          
            <div class="result">{getAuthorCount()}</div>
            <div class="result">{getTitleCount()} </div>
            <div class="result">{getSubjectCount()} </div>
            <div class="result">{getDateCount()}</div>
            <div className="tb">
            <table border="1" style={{marginTop:'30px'}}>
                <thead>
                    <tr>
                        <th >TITLE</th>
                        <th>AUTHOR </th>
                        <th>SUBJECT</th>
                        <th>PUBLISHDATE</th>
                    </tr>
                </thead>
                <tbody>
                {
                    filter === '' ?
                    (currentStudents && currentStudents.length > 0 && currentStudents.filter((stu)=>{
                        if(filter === ''){
                            return stu
                        }
                        else if (stu.title.toLowerCase()?.includes(filter.toLowerCase()) ||
                        stu.author.toLowerCase()?.includes(filter.toLowerCase()) || stu.subject.toLowerCase()?.includes(filter.toLowerCase()) ||  stu.publishDate.toLowerCase()?.includes(filter.toLowerCase()) ) {
                          return stu  
                        } 
                        return null
                    }).map((stu, index) => (
                        <tr>
                        <>
                        <td>{stu.title}</td>
                        <td>{stu.author}</td>
                        <td>{stu.subject}</td>
                        <td>{stu.publishDate}</td>
                        
                        </>
                        </tr>
                        ))
                    ) : (details && details.length > 0 && details.filter((stu)=>{
                        if(filter === ''){
                            return stu
                        }
                        else if (stu.title.toLowerCase()?.includes(filter.toLowerCase()) ||
                        stu.author.toLowerCase()?.includes(filter.toLowerCase()) || stu.subject.toLowerCase()?.includes(filter.toLowerCase()) ||  stu.publishDate.toLowerCase()?.includes(filter.toLowerCase()) ) {
                          return stu  
                        } 
                    }).map((stu, index) => (
                        <tr >
                        <>
                        <td>{console.log('stu',stu)}{stu.title}</td>
                        <td>{stu.author}</td>
                        <td>{stu.subject}</td>
                        <td>{stu.publishDate}</td>
                        
                        </>
                        </tr>
                        ))
                    )}
                </tbody>
            </table>
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
                {/* <Pagination totalStudents={details.length} studentsPerPage={studentsPerPage} paginate={paginate}/> */}
                <nav>
                <ul>
                    {
                        pageNumbers.map((num)=> {
                            return (
                                <button style={{marginRight: '2px'}}>
                                    <a onClick={() => paginate(num)} href='!#' style={{textDecoration: 'none',color:'black',padding:'5px',width:'6px'}}>
                                        {num}
                                    </a>
                                </button>
                            )
                        })
                    }
                </ul>
            </nav>
              
                
            </div>

    )
}


// map(() => {}) to map(() => ())
// npx json-server --watch db.json
//onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
