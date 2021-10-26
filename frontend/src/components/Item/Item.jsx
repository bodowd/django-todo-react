import React from "react";
import "./item.css";

export default function Item({ item, deleteItem }) {
  const status = item.completed === true ? "done!" : "not done";
  return (
    <div className="item">
      <div className="itemContainer">
        <span className="itemTitle">{item.title}</span>
        <span className="itemDescription">{item.description}</span>
        <span className="itemComplete">{status}</span>
        <button className="deleteButton" onClick={() => deleteItem(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
