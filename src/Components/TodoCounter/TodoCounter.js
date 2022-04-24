import React from 'react'
import { TodoContext } from '../TodoContext/TodoContext'
import './TodoCounter.css'

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext)
    return (
        <p className="counter">
            {completedTodos} task complete of {totalTodos}
        </p>
    )
}

export { TodoCounter }
