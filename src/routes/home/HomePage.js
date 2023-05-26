import React from 'react'
import { TodoHeader } from '../../components/TodoHeader/TodoHeader'
import { TodoCounter } from '../../components/TodoCounter/TodoCounter'
import { TodoSearch } from '../../components/TodoSearch/TodoSearch'
import { TodoList } from '../../components/TodoList/TodoList'
import { TodoItem } from '../../components/TodoItem/TodoItem'
import { useStateTodos } from '../../hooks/useStateTodos'
import { Modal } from '../../components/Modal/Modal'
import { TodoForm } from '../../components/TodoForm/TodoForm'
import { TodoError } from '../../components/TodoError/TodoError'
import { TodoLoading } from '../../components/TodoLoading/TodoLoading'
import { EmptyTodo } from '../../components/EmptyTodo/EmptyTodo'

// const defaultTodos = [
//   { text: 'say hey', status: true, },
//   { text: 'say bay', status: true, },
//   { text: 'stay in form', status: false, },
//   { text: 'change lights', status: false },
//   { text: 'change lIghts', status: false },
// ]

function HomePage() {
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
            <TodoHeader loading={loading}>
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

export { HomePage }
