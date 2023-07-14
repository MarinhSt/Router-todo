import React from 'react'
import { useLocalStorage } from './useLocalStorage'

function useStateTodos() {
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
    const createTodo = (id, e) => {
        // this method cancels the action of reloading the page when form is submitted
        // e.preventDefault()

        const newTodo = { date: '', text: '', status: false }

        // captures the value of the textArea
        const value = e
        newTodo.text = value

        // adds todo creation date
        newTodo.date = new Date()

        const newTodos = [...todos]
        newTodos.push(newTodo)
        console.log(newTodos)
        saveTodos(newTodos)
    }

    const completeTodo = date => {
        const index = todos.findIndex(todo => todo.date === date)
        const newTodos = [...todos]
        // mark as completed or pending
        newTodos[index].status !== true
            ? (newTodos[index].status = true)
            : (newTodos[index].status = false)
        saveTodos(newTodos)
    }

    const deleteTodo = date => {
        const index = todos.findIndex(todo => todo.date === date)
        const newTodos = [...todos]
        // mark as completed or pending
        newTodos.splice(index, 1)
        saveTodos(newTodos)
    }
    const editTodo = (date, e) => {
        const index = todos.findIndex(todo => todo.date === date)
        const changedTodos = [...todos]
        const newText = e
        changedTodos[index].text = newText
        saveTodos(changedTodos)
    }

    const showTodoToEdit = id => {
        const index = todos.findIndex(todo => todo.date === id)

        return todos[index].text
    }

    return {
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        error,
        loading,
        showTodos,
        completeTodo,
        deleteTodo,
        createTodo,
        editTodo,
        showTodoToEdit,
    }
}

export { useStateTodos }
