import { useState } from "react";
import { replaceTodoItems } from "../store/actions/todos";
import { useDispatch } from "react-redux";

export const useDragElem = ({ list, draggedCardId, setDraggedCardId }) => {
  const [isDragOverItem, setIsDragOverItem] = useState({
    value: false,
    isFromTopToBottonDirection: false,
  });
  const [isDraged, setIsDraged] = useState(false);
  const dispatch = useDispatch();

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
      const dragOverElementPosiiton = list.findIndex(
        (todo) => todo.id === cardId
      );
      const draggedElementPosition = list.findIndex(
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

  return {
    isDraged,
    isDragOverItem,
    onDragStartHandler,
    onDragEndHandler,
    onDragLeaveHandler,
    onDragOverHandler,
    onDropHandler,
  };
};
