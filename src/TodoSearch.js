import React from 'react'

function TodoSearch() {
  return (
    
       <div className='row m-0'>
        <div className='col-6 offset-3 mb-2'>
            <form className="search d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Enter name.." aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
       </div>

    
  )
}

export  {TodoSearch}