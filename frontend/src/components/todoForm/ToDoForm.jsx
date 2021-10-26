import React, { useState } from "react";
import "./todoform.css";

export default function ToDoForm({ createToDo }) {
  const [newTitle, setTitle] = useState("");
  const [newDescription, setDescription] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const addToDo = (event) => {
    event.preventDefault();
    createToDo({
      title: newTitle,
      description: newDescription,
      completed: false,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="form">
      <h2 className="formTitle">Create new ToDo</h2>
      <form onSubmit={addToDo}>
        Title:
        <input
          className="inputTitle"
          value={newTitle}
          onChange={handleChangeTitle}
        />
        Description:
        <input
          className="inputDescription"
          value={newDescription}
          onChange={handleChangeDescription}
        />
        <button className="submitNew" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
