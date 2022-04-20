import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';

// const defaultTodos = [
//   { text: 'say hey', status: true, },
//   { text: 'say bay', status: true, },
//   { text: 'stay in form', status: false, },
//   { text: 'change lights', status: false },
//   { text: 'change lIghts', status: false },
// ]

function useLocalStorage(itemName, initialValue) {

  //state of error on page
  const [error, setError] = React.useState(false)
  //state of load page
  const [loading, setLoading] = React.useState(true)
  //state of to-dos
  const [item, setItem] = React.useState(initialValue)


  React.useEffect(() => {
    // setTimeout used to simulate the request to API
    setTimeout(() => {
      try {

        // local storage was used as the database for the persistance the data
        const localItem = localStorage.getItem(itemName)
        let parsedItem

        // verification the existence of item in local storage
        if (!localStorage.getItem('itemName')) {
          localStorage.setItem('itemName', JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localItem)
        }

        setItem(parsedItem)
        setLoading(false)

      } catch (error) {
        setError(error)
      }

    }, 1000);
    /* if I leave this empty, when I like to modify (complete or delete) to-dos; them will be reappear again  */
    // review this, have a problems to change to-dos; don't update changes into localStorage.
  }, [])

  // save change of components in local storage
  const saveItem = (newItem) => {
    try {
      localStorage.setItem('itemName', JSON.stringify(newItem))
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  return { item, saveItem, loading, error }
}

function App() {
  // hook useLocalStorage
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_LOCAL', [])

  //state of  input search value
  const [searchValue, setSearchValue] = React.useState('')

  //variables to know the status of to-dos
  const completedTodos = todos.filter(todo => todo.status).length
  const totalTodos = todos.length

  // according to the value of input search filters the to-dos.
  let showTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue))

  // state change functions of to-dos
  const completeTodo = (text) => {
    const index = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    // mark as completed or pending
    newTodos[index].status !== true ? newTodos[index].status = true : newTodos[index].status = false
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const index = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    // mark as completed or pending
    newTodos.splice(index, 1)
    saveTodos(newTodos)
  }

  return (
    <>
      <header>
        <h1 className='title'>This are yours tasks</h1>
      </header>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>

        {/* state to make know to user status of the page. */}
        {error && 'Error to load data'}
        {loading && 'Loading data...'}
        {(!loading && !totalTodos) && 'Organize your time. Place your tasks...'}

        {showTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.status}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
    </>
  );
}

export default App;
