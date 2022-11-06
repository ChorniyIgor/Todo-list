import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { selectFilteredTodos } from "../../store/selectors/todos";
import { getFilterValue } from "../../store/selectors/filter";
import TodoListInfo from "./TodoListInfo/TodoListInfo";
import React, { useState } from "react";

const TodoList = () => {
  const filter = useSelector(getFilterValue);
  const todos = useSelector((state) => selectFilteredTodos(state, filter));

  const [draggedCardId, setDraggedCardId] = useState(null);

  return (
    <React.Fragment>
      {todos.length === 0 && (
        <p className={styles.EmptyListMsg}>
          {filter === "all" && "There is no todos..."}
          {filter === "active" && "There is no active todos..."}
          {filter === "completed" && "There is no completed todos..."}
        </p>
      )}
      <ul className={styles.TodoList}>
        {todos.map((todo) => (
          <TodoItem
            todosList={todos}
            todoData={todo}
            key={todo.id}
            draggedCardId={draggedCardId}
            setDraggedCardId={setDraggedCardId}
          />
        ))}
      </ul>

      <TodoListInfo />
    </React.Fragment>
  );
};

export default TodoList;
