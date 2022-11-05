import styles from "./TodoList.module.css";
import Card from "../../UI/Card/Card";
import Container from "../../UI/Container/Container";
import TodoItem from "./TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { selectFilteredTodos } from "../../store/selectors/todos";
import { getFilterValue } from "../../store/selectors/filter";
import TodoListInfo from "./TodoListInfo/TodoListInfo";
import { useState } from "react";

const TodoList = () => {
  const filter = useSelector(getFilterValue);
  const todos = useSelector((state) => selectFilteredTodos(state, filter));

  const [draggedCardId, setDraggedCardId] = useState(null);

  return (
    <Container className={styles.TodoListContainer}>
      <Card>
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

        {todos.length !== 0 && <TodoListInfo />}
      </Card>
    </Container>
  );
};

export default TodoList;
