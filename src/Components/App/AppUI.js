import React from 'react'
import { TodoCounter } from '../TodoCounter/TodoCounter'
import { TodoSearch } from '../TodoSearch/TodoSearch'
import { TodoList } from '../TodoList/TodoList'
import { TodoItem } from '../TodoItem/TodoItem'
import { TodoContext } from '../TodoContext/TodoContext'

// const defaultTodos = [
//   { text: 'say hey', status: true, },
//   { text: 'say bay', status: true, },
//   { text: 'stay in form', status: false, },
//   { text: 'change lights', status: false },
//   { text: 'change lIghts', status: false },
// ]

function AppUI() {
    const { error, loading, totalTodos, showTodos, completeTodo, deleteTodo } =
        React.useContext(TodoContext)
    return (
        <>
            <header>
                <h1 className="title">This are yours tasks</h1>
            </header>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {/* state to make know to user status of the page. */}
                {error && 'Error to load data'}
                {loading && 'Loading data...'}
                {!loading &&
                    !totalTodos &&
                    'Organize your time. Place your tasks...'}

                {showTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.status}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
        </>
    )
}

export default AppUI
