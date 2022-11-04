import styles from "./TodoList.module.css";
import Card from "../../UI/Card/Card";
import Container from "../../UI/Container/Container";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {
  const todos = [1, 2, 3, 4];
  return (
    <Container className={styles.TodoListContainer}>
      <Card>
        <ul className={styles.TodoList}>
          {todos.map((todo) => (
            <TodoItem />
          ))}
        </ul>
      </Card>
    </Container>
  );
};

export default TodoList;
