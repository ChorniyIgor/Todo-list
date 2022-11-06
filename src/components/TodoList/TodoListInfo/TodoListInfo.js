import { useSelector, useDispatch } from "react-redux";
import useWindowSize from "../../../hooks/useWindowSize";
import { removeComplitedTodo } from "../../../store/actions/todos";
import {
  getActiveTodosCount,
  getCompliteTodosCount,
} from "../../../store/selectors/todos";
import Filter from "../../Filter/Filter";
import styles from "./TodoListInfo.module.css";

const TodoListInfo = () => {
  const windowSize = useWindowSize();
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
      {windowSize.width >= 580 && <Filter />}
      <div className={styles.TodoListInfoClearBtnContainer}>
        {todosComplitedCount !== 0 && (
          <button
            className={styles.TodoListInfoClearBtn}
            onClick={onClearBtnClickHandler}
          >
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoListInfo;
