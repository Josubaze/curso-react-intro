import React from 'react'
import {TodoIcon} from './TodoIcon';
function CompleteIcon({completed, onComplete}) {

  return (
    <TodoIcon
      type = 'completed'
      color = { completed ? ' #9EFF22 ' : '#ffffda' }
      onClick = {onComplete}
    />
  )
}

export  {CompleteIcon}