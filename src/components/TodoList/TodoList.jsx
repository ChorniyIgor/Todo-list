import styles from "./TodoList.module.css";
import Card from "../../UI/Card/Card";
import Container from "../../UI/Container/Container";
import TodoItem from "./TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { selectFilteredTodos } from "../../store/selectors/todos";
import { getFilterValue } from "../../store/selectors/filter";
import TodoListInfo from "./TodoListInfo/TodoListInfo";

const TodoList = () => {
  const filter = useSelector(getFilterValue);
  const todos = useSelector((state) => selectFilteredTodos(state, filter));

  return (
    <Container className={styles.TodoListContainer}>
      <Card>
        {todos.length === 0 && (
          <p className={styles.EmptyListMsg}>There is no todos...</p>
        )}
        <ul className={styles.TodoList}>
          {todos.map((todo) => (
            <TodoItem todoData={todo} key={todo.id} />
          ))}
        </ul>

        {todos.length !== 0 && <TodoListInfo />}
      </Card>
    </Container>
  );
};

export default TodoList;
