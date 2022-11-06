import styles from "./TodoItem.module.css";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoStatus } from "../../../store/actions/todos";
import { useDragElem } from "../../../hooks/useDragElem";

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const { draggedCardId, setDraggedCardId } = props;

  const onTodoItemClickHandler = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  const onCheckboxClickhandler = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  const {
    isDraged,
    isDragOverItem,
    onDragStartHandler,
    onDragEndHandler,
    onDragLeaveHandler,
    onDragOverHandler,
    onDropHandler,
  } = useDragElem(props.todosList, dispatch, draggedCardId, setDraggedCardId);

  const onRemoveBtnClickHandler = (id, evt) => {
    evt.stopPropagation();
    dispatch(removeTodo(id));
  };

  const isDragOverItemClass = isDragOverItem.isFromTopToBottonDirection
    ? styles.DragOver
    : styles.DragOverReverce;

  let classes = `${isDragOverItem.value && isDragOverItemClass} ${
    isDraged && styles.Draged
  }`;

  return (
    <li
      draggable="true"
      onDragStart={onDragStartHandler.bind(this, props.todoData.id)}
      onDragEnd={onDragEndHandler}
      onDragLeave={onDragLeaveHandler}
      onDragOver={onDragOverHandler.bind(this, props.todoData.id)}
      onDrop={onDropHandler.bind(this, props.todoData.id)}
      onClick={onTodoItemClickHandler.bind(null, props.todoData.id)}
      className={`${styles.TodoItemContainer} ${classes} `}
    >
      <div className={styles.TodoItem}>
        <div className={styles.TodoItemContent}>
          <Checkbox
            onClick={onCheckboxClickhandler.bind(null, props.todoData.id)}
            isChecked={props.todoData.isDone}
            id={props.todoData.id}
          />
          <p className={props.todoData.isDone ? styles["Title--isDone"] : ""}>
            {props.todoData.title}
          </p>
          <button
            onClick={onRemoveBtnClickHandler.bind(this, props.todoData.id)}
          >
            delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
