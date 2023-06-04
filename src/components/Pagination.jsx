import React from 'react'

export const Pagination= ({totalStudents, studentsPerPage, paginate})=> {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalStudents/studentsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log('pageNumbers',pageNumbers);

    return(
        <div>
            <div>
            <select>
                {
                   pageNumbers.map((num) => {
                   return(
                    
                        <option>{num}</option>
                    
                    )})
                }
                </select>
            </div> 
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
