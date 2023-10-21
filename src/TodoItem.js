function TodoItem(props){
    return(
          <li className="item border rounded border-0">
            <i class='bx bx-task'></i>
            <p className="text-item">{props.text}</p>
            <i class='bx bx-task-x' ></i>
          </li>
    );
}

export {TodoItem}