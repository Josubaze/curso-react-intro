import React from 'react'
import './style.css';
function TodoSearch({searchValue, setSearchValue}) {
  
  return ( 

      <div className='row m-0'>
        <div className=' offset-3 offset-sm-3 col-md-8 offset-md-3 mb-2'> 
            <form className="search d-flex" role="search">
              <input className="form-control me-2" type="search" value={searchValue} placeholder="Enter name.." aria-label="Search" 
              onChange={
                (event) => {
                  setSearchValue(event.target.value)
                }
              }></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
      </div>

    
  )
}

export  {TodoSearch}