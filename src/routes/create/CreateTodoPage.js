import React from 'react'
import { TodoForm } from '../../components/TodoForm/TodoForm'
import { useStateTodos } from '../../hooks/useStateTodos'

function CreateTodoPage(params) {
    const { deployModal, createTodo } = useStateTodos()
    return <TodoForm deployModal={deployModal} createTodo={createTodo} />
}

export { CreateTodoPage }
