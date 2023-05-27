import { NavLink } from 'react-router-dom'
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
            <NavLink
                to="/edit"
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
                <span className="icon icon-edit" onClick={props.onDelete}>
                    ✍
                </span>
            </NavLink>
            <span className="icon icon-delete" onClick={props.onDelete}>
                X
            </span>
        </li>
    )
}

export { TodoItem }
