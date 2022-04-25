import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider(props) {
  // hook useLocalStorage
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_LOCAL", []);

  //state of  input search value
  const [searchValue, setSearchValue] = React.useState("");

  //state of modal
  const [openModal, setOpenModal] = React.useState(false);

  //variables to know the status of to-dos
  const completedTodos = todos.filter((todo) => todo.status).length;
  const totalTodos = todos.length;

  // according to the value of input search filters the to-dos.
  let showTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue)
  );

  // state change functions of to-dos
  const createTodo = (e) => {
    // this method cancels the action of reloading the page when form is submitted
    e.preventDefault();

    const newTodo = { date: "", text: "", status: false };

    // captures the value of the textArea
    const value = e.target[0].value;
    newTodo.text = value;

    // adds todo creation date
    newTodo.date = new Date();

    const newTodos = [...todos];
    newTodos.push(newTodo);
    console.log(newTodos);
    saveTodos(newTodos);
    setOpenModal(false);
  };

  const completeTodo = (date) => {
    const index = todos.findIndex((todo) => todo.date === date);
    const newTodos = [...todos];
    // mark as completed or pending
    newTodos[index].status !== true
      ? (newTodos[index].status = true)
      : (newTodos[index].status = false);
    saveTodos(newTodos);
  };

  const deleteTodo = (date) => {
    const index = todos.findIndex((todo) => todo.date === date);
    const newTodos = [...todos];
    // mark as completed or pending
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  const deployModal = (e) => {
    // e.target.classList.toggle('close-modal')
    !openModal ? setOpenModal(true) : setOpenModal(false);
    // other way to change state of openModal
    // assign the openModal negation as the new state
    // setOpenModal(openModal=>!openModal)
  };
  return (
    <TodoContext.Provider
      value={{
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        error,
        loading,
        showTodos,
        completeTodo,
        deleteTodo,
        createTodo,
        openModal,
        deployModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
