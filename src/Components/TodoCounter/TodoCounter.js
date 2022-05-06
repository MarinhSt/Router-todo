import React from 'react'
import './TodoCounter.css'

function TodoCounter({ totalTodos, completedTodos, loading }) {
    return (
        <p className={`counter ${!!loading && 'counter--loading'}`}>
            {completedTodos} task complete of {totalTodos}
        </p>
    )
}

export { TodoCounter }
