import React from 'react'
import { TodoHeader } from '../TodoHeader/TodoHeader'
import { TodoCounter } from '../TodoCounter/TodoCounter'
import { TodoSearch } from '../TodoSearch/TodoSearch'
import { TodoList } from '../TodoList/TodoList'
import { TodoItem } from '../TodoItem/TodoItem'
import { TodoContext } from '../TodoContext/TodoContext'
import { Modal } from '../Modal/Modal'
import { TodoForm } from '../TodoForm/TodoForm'

// const defaultTodos = [
//   { text: 'say hey', status: true, },
//   { text: 'say bay', status: true, },
//   { text: 'stay in form', status: false, },
//   { text: 'change lights', status: false },
//   { text: 'change lIghts', status: false },
// ]

function AppUI() {
    const {
        error,
        loading,
        totalTodos,
        showTodos,
        completeTodo,
        deleteTodo,
        openModal,
        deployModal,
        completedTodos,
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext)
    return (
        <>
            <TodoHeader>
                <h1 className="title">This are yours tasks</h1>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList>
                {/* state to make know to user status of the page. */}
                {error && 'Error to load data'}
                {loading && 'Loading data...'}
                {!loading &&
                    !totalTodos &&
                    'Organize your time. Place your tasks...'}

                {showTodos.map(todo => (
                    <TodoItem
                        key={todo.date}
                        text={todo.text}
                        completed={todo.status}
                        onComplete={() => completeTodo(todo.date)}
                        onDelete={() => deleteTodo(todo.date)}
                    />
                ))}
            </TodoList>
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <button
                className={`button-modal ${!!openModal && 'close-modal'}`}
                onClick={deployModal}
            >
                +
            </button>
        </>
    )
}

export default AppUI
