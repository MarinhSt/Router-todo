import './TodoItem.css'

function TodoItem(props) {
    return (
        <li className={`item ${props.completed && 'item-check--active'}`}>
            <span
                className={`icon icon-check ${
                    props.completed && 'icon-check--active'
                } `}
                onClick={props.onComplete}
            >
                /
            </span>
            <p className="item-p">{props.text}</p>
            <span className="icon icon-delete" onClick={props.onDelete}>
                X
            </span>
        </li>
    )
}

export { TodoItem }
