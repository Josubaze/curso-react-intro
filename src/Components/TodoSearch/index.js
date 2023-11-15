import React from 'react'
import './TodoSearch.css';
import  {TodoContext} from '../TodoContext'

function TodoSearch() {

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return ( 

      <div className='row m-0'>
        <div className='col offset-2 '> 
            <form className="search input-group" role="search">
              <input className="form-control " type="search" value={searchValue} placeholder="Enter description.." aria-label="Search" 
              onChange={
                (event) => {
                  setSearchValue(event.target.value)
                }
              }></input>
              <button className="btn btn-outline-success disabled" type="submit">Search</button>
            </form>
        </div>
      </div>

    
  )
}

export  {TodoSearch}