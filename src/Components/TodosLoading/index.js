import React from 'react'
import './TodosLoading.css'
function TodosLoading() {
  return (
    <div className='row'>
        <div className='col'>
            <div className="cssload-container">
                <ul className="cssload-flex-container">
                    <li>
                        <span className="cssload-loading cssload-one"></span>
                        <span className="cssload-loading cssload-two"></span>
                        <span className="cssload-loading-center"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export {TodosLoading}