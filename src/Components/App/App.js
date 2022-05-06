import React from 'react'
import { TodoHeader } from '../TodoHeader/TodoHeader'
import { TodoCounter } from '../TodoCounter/TodoCounter'
import { TodoSearch } from '../TodoSearch/TodoSearch'
import { TodoList } from '../TodoList/TodoList'
import { TodoItem } from '../TodoItem/TodoItem'
import { useStateTodos } from './useStateTodos'
import { Modal } from '../Modal/Modal'
import { TodoForm } from '../TodoForm/TodoForm'
import { TodoError } from '../TodoError/TodoError'
import { TodoLoading } from '../TodoLoading/TodoLoading'
import { EmptyTodo } from '../EmptyTodo/EmptyTodo'

// const defaultTodos = [
//   { text: 'say hey', status: true, },
//   { text: 'say bay', status: true, },
//   { text: 'stay in form', status: false, },
//   { text: 'change lights', status: false },
//   { text: 'change lIghts', status: false },
// ]

function App() {
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
        createTodo,
    } = useStateTodos()
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

            <TodoList
                error={error}
                loading={loading}
                totalTodos={totalTodos}
                showTodos={showTodos}
                searchValue={searchValue}
                TodoError={() => <TodoError />}
                TodoLoading={() => <TodoLoading />}
                EmptyTodo={() => <EmptyTodo />}
                EmptyResults={search => <p>don't find results for {search}</p>}
                render={todo => (
                    <TodoItem
                        key={todo.date}
                        text={todo.text}
                        completed={todo.status}
                        onComplete={() => completeTodo(todo.date)}
                        onDelete={() => deleteTodo(todo.date)}
                    />
                )}
            />

            {/* <TodoList>
                state to make know to user status of the page.
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
            </TodoList> */}

            {!!openModal && (
                <Modal>
                    <TodoForm
                        deployModal={deployModal}
                        createTodo={createTodo}
                    />
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

export default App
