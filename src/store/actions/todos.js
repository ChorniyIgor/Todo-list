import {
  ADD_NEW_TODO,
  REMOVE_COMPLEATED_TODO,
  REMOVE_TODO,
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
