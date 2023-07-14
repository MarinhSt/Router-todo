import { useNavigate } from 'react-router-dom'
import './CreateTodoButton.css'

function CreateTodoButton(params) {
    const navigate = useNavigate()
    const goCreate = () => {
        navigate('/create')
    }
    return (
        <button className="create-todo-button" onClick={goCreate}>
            +
        </button>
    )
}

export { CreateTodoButton }
