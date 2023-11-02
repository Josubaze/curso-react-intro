import React from 'react'
import {TodoIcon} from './TodoIcon'
function DeleteIcon({onDelete}) {
  return (
    <TodoIcon
      type = 'delete'
      color = '#CFD8DC'
      onClick = {onDelete}
    />
  )
}

export  {DeleteIcon}