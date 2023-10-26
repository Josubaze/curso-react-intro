import './style.css';
function TodoItem(props){
    return(
          <li className="item border rounded border-0">
            <i class={`bx bx-task ${props.completed && "bx-task--active"}`}
              onClick={props.onComplete}
            ></i>
            <p className={`text-item ${props.completed && "text-item--completed"}`}>
              {props.text}
            </p>
            <i class='bx bx-task-x' 
              onClick={props.onDelete}
            ></i>
          </li>
    );
}

export {TodoItem}