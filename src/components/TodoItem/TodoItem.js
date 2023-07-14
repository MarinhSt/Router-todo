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
                <svg
                    className="feather feather-check"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </span>
            <p className="item-p">{props.text}</p>

            <span className="icon icon-edit" onClick={props.onEdit}>
                <svg
                    fill="none"
                    height="28"
                    viewBox="0 0 28 28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-edit"
                >
                    <path
                        clipRule="evenodd"
                        d="M26.4097 9.61208C27.196 8.8358 27.1969 7.57578 26.4117 6.79842L21.1441 1.58305C20.3597 0.806412 19.0875 0.805538 18.302 1.5811L3.55214 16.1442C3.15754 16.5338 2.87982 17.024 2.74985 17.5603L1.05726 24.5451C0.697341 26.0304 2.09375 27.3461 3.57566 26.918L10.3372 24.9646C10.8224 24.8244 11.2642 24.5658 11.622 24.2125L26.4097 9.61208ZM20.4642 12.6725L10.2019 22.8047C10.0827 22.9225 9.9354 23.0087 9.77366 23.0554L4.17079 24.6741C3.65448 24.8232 3.16963 24.359 3.2962 23.8367L4.70476 18.024C4.74809 17.8453 4.84066 17.6819 4.97219 17.552L15.195 7.45865L20.4642 12.6725ZM21.8871 11.2676L16.618 6.05372L19.0185 3.68356C19.4084 3.29865 20.0354 3.29908 20.4247 3.68454L24.271 7.49266C24.6666 7.88436 24.6661 8.52374 24.27 8.91488L21.8871 11.2676Z"
                        fill="black"
                        fillRule="evenodd"
                    />
                </svg>
            </span>
            <span className="icon icon-delete" onClick={props.onDelete}>
                <svg
                    height="48"
                    viewBox="0 0 48 48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0h48v48H0V0z" fill="none" />
                    <path d="M12 38c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14H12v24zm4.93-14.24l2.83-2.83L24 25.17l4.24-4.24 2.83 2.83L26.83 28l4.24 4.24-2.83 2.83L24 30.83l-4.24 4.24-2.83-2.83L21.17 28l-4.24-4.24zM31 8l-2-2H19l-2 2h-7v4h28V8z" />
                    <path d="M0 0h48v48H0z" fill="none" />
                </svg>
            </span>
        </li>
    )
}

export { TodoItem }
