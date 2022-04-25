import React from 'react'
import { TodoContext } from '../TodoContext/TodoContext'
import './TodoForm.css'

function TodoForm() {
    const { deployModal, createTodo } = React.useContext(TodoContext)
    return (
        <form onSubmit={createTodo} className="containerModal">
            {/* <h4 className="modal-title">writhe the task</h4> */}
            <textarea
                className="modal-textarea"
                placeholder="write the task"
                required
            />
            <div className="buttonContainer">
                <button type="button" onClick={deployModal}>
                    cancel
                </button>
                <button type="submit">create</button>
            </div>
        </form>
    )
}

export { TodoForm }
