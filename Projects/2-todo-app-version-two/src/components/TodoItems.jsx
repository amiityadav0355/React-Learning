import React from "react";
import TodoItem from "./ToDoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems }) {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;
