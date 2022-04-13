import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';

const defaultTodos = [
  { text: 'say hey', status: true, },
  { text: 'say bay', status: true, },
  { text: 'stay in form', status: false, },
  { text: 'change lights', status: false },
  { text: 'change lIghts', status: false },
]

function App() {
  //state of to-dos and input search value
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  //variables to know the status of to-dos
  const completedTodos = todos.filter(todo => todo.status).length
  const totalTodos = todos.length

  // according to the value of input search filters the to-dos.
  let showTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue))


  // REVIEW COMPLETE TO-DOS
  const completeTodo = (text) => {
    const index = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    // mark as completed or pending
    newTodos[index].status !== true ? newTodos[index].status = true : newTodos[index].status = false
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const index = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    // mark as completed or pending
    newTodos.splice(index, 1)
    setTodos(newTodos)
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
