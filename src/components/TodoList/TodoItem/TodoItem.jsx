import styles from "./TodoItem.module.css";
import Checkbox from "../../../UI/Checkbox/Checkbox";

const TodoItem = () => {
  return (
    <li className={styles.TodoItem}>
      <Checkbox />
      <p>Todo title</p>
      <button>delete</button>
    </li>
  );
};

export default TodoItem;
