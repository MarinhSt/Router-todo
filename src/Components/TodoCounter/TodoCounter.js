import React from 'react'
import './TodoCounter.css'

function TodoCounter({ totalTodos, completedTodos }) {
    return (
        <p className="counter">
            {completedTodos} task complete of {totalTodos}
        </p>
    )
}

export { TodoCounter }
