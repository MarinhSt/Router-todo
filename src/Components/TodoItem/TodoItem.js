import "./TodoItem.css";


function TodoItem(props) {
    return (
        <li className="item">
            <span className="icon icon-check">/</span>
            <p className="item-p">{props.text}</p>
            <span className="icon icon-delete">X</span>
        </li>
    );
}

export { TodoItem }