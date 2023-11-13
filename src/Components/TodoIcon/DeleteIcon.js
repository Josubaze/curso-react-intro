import React from 'react'
import {TodoIcon} from './TodoIcon'
function DeleteIcon({onDelete, onAllCompleted}) {
  return (
    <TodoIcon
      type = 'delete'
      color = '#CFD8DC'
      onClick = {onDelete}
      onAllCompleted={ onAllCompleted }
    />
  )
}

export  {DeleteIcon}