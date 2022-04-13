import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
    return (
        <p className="counter">{completed} task complete of {total}</p>
    );
}

export { TodoCounter }