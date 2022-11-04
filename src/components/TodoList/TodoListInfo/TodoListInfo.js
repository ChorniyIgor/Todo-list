import { useSelector, useDispatch } from "react-redux";
import { removeComplitedTodo } from "../../../store/actions/todos";
import {
  getActiveTodosCount,
  getCompliteTodosCount,
} from "../../../store/selectors/todos";
import styles from "./TodoListInfo.module.css";

const TodoListInfo = () => {
  const todosActiveCount = useSelector(getActiveTodosCount);
  const todosComplitedCount = useSelector(getCompliteTodosCount);
  const dispatch = useDispatch();

  const onClearBtnClickHandler = () => {
    dispatch(removeComplitedTodo());
  };

  return (
    <div className={styles.TodoListInfo}>
      <p>
        {todosActiveCount} {todosActiveCount === 1 ? "item" : "items"} left
      </p>
      {todosComplitedCount !== 0 && (
        <button onClick={onClearBtnClickHandler}>Clear Completed</button>
      )}
    </div>
  );
};

export default TodoListInfo;
