import React from 'react'
import {TodoIcon} from './TodoIcon';
function CompleteIcon({completed, onComplete, onAllCompleted}) {

  return (
    <TodoIcon
      type = 'completed'
      color = { completed ? ' #9EFF22 ' : '#ffffda' }
      onClick = {onComplete}
      onAllCompleted={onAllCompleted}
    />
  )
}

export  {CompleteIcon}