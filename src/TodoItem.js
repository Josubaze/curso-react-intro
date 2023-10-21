function TodoItem(props){
    return(
          <li className="item border rounded border-0">
            <p className="text-item">{props.text}</p>
            <button type="button" class="btn-close" aria-label="Close"></button>
          </li>
    );
}

export {TodoItem}