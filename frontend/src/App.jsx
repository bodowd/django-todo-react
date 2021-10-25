import React, { useState, useEffect } from "react";
import "./app.css";
import Item from "./components/Item/Item";
import ToDoForm from "./components/todoForm/ToDoForm";
import Topbar from "./components/topbar/Topbar";
import todoService from "./services/todos";

function App() {
  const [todos, setTodos] = useState([])

  const hook = () => {
    todoService
      .getAll()
      .then(initialTodos => {
        setTodos(initialTodos)
      })
  }
  useEffect(hook, [])

  const addToDo = (todoObject) => {
    todoService
      .create(todoObject)
      .then(returned => {
        setTodos(todos.concat(returned))
      })
  }

  const deleteItem = (id) => {
    // const itemToRemove = todos.find(t => t.id === id)
    todoService.remove(id)
    setTodos(todos.filter(t => t.id !== id))
  }



  return (
    <>
      <Topbar />
      <div className="container">
        <ToDoForm createToDo={addToDo} />
        <ul className="itemList">
          {todos.map((d) => (
            <Item
              key={d.id}
              item={d}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
