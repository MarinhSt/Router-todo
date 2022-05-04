import './TodoList.css'

function TodoList(props) {
    return (
        <section className="list-container">
            {/* state to make know to user status of the page. */}
            {props.error && props.TodoError()}
            {props.loading && props.TodoLoading()}
            {!props.loading && !props.totalTodos && props.EmptyTodo()}
            {props.showTodos.map(props.render)}
            <ul>{props.children}</ul>
        </section>
    )
}

export { TodoList }
