import React from 'react'
import './TodoForm.css'
import { NavLink } from 'react-router-dom'

function TodoForm({ deployModal, createTodo, Action }) {
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
                    <NavLink
                        to="/"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        cancel
                    </NavLink>
                </button>
                <button type="submit">
                    <NavLink
                        to="/"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        {Action}
                    </NavLink>
                </button>
            </div>
        </form>
    )
}

export { TodoForm }
