import React from 'react'
import { TodoForm } from '../../components/TodoForm/TodoForm'
import { useStateTodos } from '../../hooks/useStateTodos'

function EditTodoPage() {
    const { deployModal, createTodo } = useStateTodos()
    return (
        <TodoForm
            deployModal={deployModal}
            createTodo={createTodo}
            Action={'Edit'}
        />
    )
}

export { EditTodoPage }
