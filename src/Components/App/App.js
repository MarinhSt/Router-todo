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

function App() {

  // local storage was used as the database for the persistance the data
  const localTodos = localStorage.getItem('TODOS_LOCAL')
  let parsedTodos
  if (!localStorage.getItem('TODOS_LOCAL')) {
    localStorage.setItem('TODOS_LOCAL', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localTodos)
  }

  //state of to-dos and input search value
  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('')

  //variables to know the status of to-dos
  const completedTodos = todos.filter(todo => todo.status).length
  const totalTodos = todos.length

  // according to the value of input search filters the to-dos.
  let showTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue))


  // save change of components in local storage
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_LOCAL', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

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
