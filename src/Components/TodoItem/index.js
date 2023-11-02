import './TodoItem.css';
import {CompleteIcon} from './CompleteIcon.js'
import {DeleteIcon} from './DeleteIcon.js'

function TodoItem(props){
    return(
          <li className="item border rounded border-0">
            {/* <i class={`bx bx-task ${props.completed && "bx-task--active"}`}
              onClick={() => {
                props.onComplete();
                props.onAllCompleted();  
              }}
            ></i> */}
            <CompleteIcon
              completed = {props.completed}
              onComplete={props.onComplete}
              onAllCompleted= {props.onAllCompleted}  
              
            />
            <p className={`text-item ${props.completed && "text-item--completed"}`}>
              {props.text}
            </p>
            <DeleteIcon
              onDelete = {props.onDelete}
            />

            {/* <i class='bx bx-task-x' 
              onClick={props.onDelete}
            ></i> */}
          </li>
    );
}

export {TodoItem}