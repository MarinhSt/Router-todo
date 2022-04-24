import React from 'react'
import { useLocalStorage } from './useLocalStorage'
const TodoContext = React.createContext()

function TodoProvider(props) {
    // hook useLocalStorage
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_LOCAL', [])

    //state of  input search value
    const [searchValue, setSearchValue] = React.useState('')

    //variables to know the status of to-dos
    const completedTodos = todos.filter(todo => todo.status).length
    const totalTodos = todos.length

    // according to the value of input search filters the to-dos.
    let showTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(searchValue)
    )

    // state change functions of to-dos
    const completeTodo = text => {
        const index = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        // mark as completed or pending
        newTodos[index].status !== true
            ? (newTodos[index].status = true)
            : (newTodos[index].status = false)
        saveTodos(newTodos)
    }

    const deleteTodo = text => {
        const index = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        // mark as completed or pending
        newTodos.splice(index, 1)
        saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider
            value={{
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                error,
                loading,
                showTodos,
                completeTodo,
                deleteTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }
