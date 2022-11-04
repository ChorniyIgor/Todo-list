export const selectFilteredTodos = (store, filter) => {
  switch (filter) {
    case "all":
      return store.todos;
    case "active":
      return store.todos.filter((todo) => !todo.isDone);
    case "completed":
      return store.todos.filter((todo) => todo.isDone);
    default:
      return store.todos;
  }
};

export const getActiveTodosCount = (store) =>
  store.todos.filter((todo) => !todo.isDone).length;

export const getCompliteTodosCount = (store) =>
  store.todos.filter((todo) => todo.isDone).length;
