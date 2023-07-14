import React from 'react'
import { useParams } from 'react-router-dom'
import { TodoForm } from '../../components/TodoForm/TodoForm'
import { TodoLoading } from '../../components/TodoLoading/TodoLoading'
import { useStateTodos } from '../../hooks/useStateTodos'

function EditTodoPage() {
    // const params = useParams()
    // const id = params.id
    const { id } = useParams()
    const { loading, deployModal, editTodo, showTodoToEdit } = useStateTodos()
    let todoText
    !loading && (todoText = showTodoToEdit(id))

    // console.log(todoText)
    return loading ? (
        <TodoLoading />
    ) : (
        <TodoForm
            TodoLoading={() => <TodoLoading />}
            deployModal={deployModal}
            todoText={todoText}
            processTodo={editTodo}
            id={id}
            Action={'Edit'}
            loading={loading}
        />
    )
}

export { EditTodoPage }
