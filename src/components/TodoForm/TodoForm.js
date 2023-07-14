import React, { useState } from 'react'
import './TodoForm.css'
import { useNavigate } from 'react-router-dom'

function TodoForm({ loading, TodoLoading, todoText, processTodo, Action, id }) {
    const [changes, setChanges] = useState(todoText || '')

    const navigate = useNavigate()
    const onCancel = e => {
        navigate('/')
    }
    const onSubmit = e => {
        e.preventDefault()
        console.log(changes)

        processTodo(id, changes)
        navigate('/')
    }
    const onChange = e => {
        setChanges(e.target.value)
    }
    return (
        <div className="containerForm">
            {loading && TodoLoading()}

            {!loading && (
                <form onSubmit={onSubmit} className="containerModal">
                    <h4 className="modal-title">{Action} the task</h4>
                    <textarea
                        className="modal-textarea"
                        placeholder="write the task"
                        value={changes}
                        onChange={onChange}
                        required
                    />
                    <div className="buttonContainer">
                        <button type="button" onClick={onCancel}>
                            cancel
                        </button>
                        <button type="submit">{Action}</button>
                    </div>
                </form>
            )}
        </div>
    )
}

export { TodoForm }
