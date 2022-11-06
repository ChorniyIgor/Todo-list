import styles from "./TodoItem.module.css";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  removeTodo,
  replaceTodoItems,
  toggleTodoStatus,
} from "../../../store/actions/todos";

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const { draggedCardId, setDraggedCardId } = props;

  const [isDragOverItem, setIsDragOverItem] = useState({
    value: false,
    isFromTopToBottonDirection: false,
  });
  const [isDraged, setIsDraged] = useState(false);

  const onTodoItemClickHandler = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  const onCheckboxClickhandler = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  const onRemoveBtnClickHandler = (id, evt) => {
    evt.stopPropagation();
    dispatch(removeTodo(id));
  };

  const onDragStartHandler = (cardId, evt) => {
    setDraggedCardId(cardId);
    setIsDraged(true);
  };

  const onDragEndHandler = (evt) => {
    setIsDraged(false);
  };
  const onDragLeaveHandler = (evt) => {
    if (evt.target.tagName === "DIV") {
      setIsDragOverItem({
        value: false,
        isFromTopToBottonDirection: false,
      });
    }
  };
  const onDragOverHandler = (cardId, evt) => {
    evt.preventDefault();
    if (cardId !== draggedCardId) {
      const dragOverElementPosiiton = props.todosList.findIndex(
        (todo) => todo.id === cardId
      );
      const draggedElementPosition = props.todosList.findIndex(
        (todo) => todo.id === draggedCardId
      );
      setIsDragOverItem({
        value: true,
        isFromTopToBottonDirection:
          dragOverElementPosiiton > draggedElementPosition,
      });
    }
  };
  const onDropHandler = (cardId, evt) => {
    evt.preventDefault();
    setIsDragOverItem({
      value: false,
      isFromTopToBottonDirection: false,
    });
    if (draggedCardId !== cardId) {
      dispatch(replaceTodoItems(draggedCardId, cardId));
    }
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
