import {
  ADD_NEW_TODO,
  REMOVE_COMPLEATED_TODO,
  REMOVE_TODO,
  REPLACE_TODO_ITEMS,
  TOGGLE_TODO_STATUS,
} from "../consts/todos";

export const addNewTodo = (title) => ({
  type: ADD_NEW_TODO,
  title,
});

export const toggleTodoStatus = (id) => ({
  type: TOGGLE_TODO_STATUS,
  id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

export const removeComplitedTodo = () => ({ type: REMOVE_COMPLEATED_TODO });

export const replaceTodoItems = (firstItemId, secondItemId) => ({
  type: REPLACE_TODO_ITEMS,
  firstItemId,
  secondItemId,
});
