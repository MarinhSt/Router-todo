import React from 'react'
import { TodoContext } from '../TodoContext/TodoContext'
import './TodoCounter.css'

function TodoCounter({ totalTodos, completedTodos }) {
    return (
        <p className="counter">
            {completedTodos} task complete of {totalTodos}
        </p>
    )
}

export { TodoCounter }
