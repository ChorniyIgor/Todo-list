import styles from "./TodoItem.module.css";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoStatus } from "../../../store/actions/todos";

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const onTodoItemClickHandler = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  const onRemoveBtnClickHandler = (id, evt) => {
    evt.stopPropagation();
    dispatch(removeTodo(id));
  };
  return (
    <li
      draggable="true"
      className={styles.TodoItem}
      onClick={onTodoItemClickHandler.bind(null, props.todoData.id)}
    >
      <Checkbox isChecked={props.todoData.isDone} />
      <p>{props.todoData.title}</p>
      <button onClick={onRemoveBtnClickHandler.bind(this, props.todoData.id)}>
        delete
      </button>
    </li>
  );
};

export default TodoItem;
