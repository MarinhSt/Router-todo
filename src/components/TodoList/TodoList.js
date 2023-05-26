import './TodoList.css'

function TodoList(props) {
    return (
        <section className="list-container">
            {/* state to make know to user status of the page. */}
            {props.error && props.TodoError()}
            {props.loading && props.TodoLoading()}
            {!props.loading && !props.totalTodos && props.EmptyTodo()}
            {!!props.totalTodos &&
                !props.showTodos.length &&
                props.EmptyResults(props.searchValue)}

            <ul>{props.showTodos.map(props.render)}</ul>
        </section>
    )
}

export { TodoList }
