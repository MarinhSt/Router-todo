import "./TodoItem.css";


function TodoItem(props) {
    return (
        <li className={`item ${props.complete && 'item-check--active'}`}>
            <span className={`icon icon-check ${props.complete && 'icon-check--active'} `}>
                /
            </span>
            <p className="item-p">{props.text}</p>
            <span className="icon icon-delete">
                X
            </span>
        </li>
    );
}

export { TodoItem }