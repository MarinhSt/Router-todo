import React from 'react'
import { TodoForm } from '../../components/TodoForm/TodoForm'
import { useStateTodos } from '../../hooks/useStateTodos'

function CreateTodoPage() {
    const { createTodo } = useStateTodos()
    return <TodoForm processTodo={createTodo} Action={'Create'} />
}

export { CreateTodoPage }
