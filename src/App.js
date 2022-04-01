import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
// import './App.css';

const todos = [
  { text: 'say hey', status: true, },
  { text: 'say bay', status: true, },
  { text: 'stay in form', status: false, },
  { text: 'change lights', status: false },
]

function App() {
  return (
    <>
      <header>
        <h1>This are yours tasks</h1>
      </header>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
    </>
  );
}

export default App;
