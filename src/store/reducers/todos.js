import {
  ADD_NEW_TODO,
  REMOVE_COMPLEATED_TODO,
  REMOVE_TODO,
  REPLACE_TODO_ITEMS,
  TOGGLE_TODO_STATUS,
} from "../consts/todos";

const todosInitialState = [];

const todosReducer = (state = todosInitialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO: {
      return [
        {
          title: action.title.charAt(0).toUpperCase() + action.title.slice(1),
          isDone: false,
          id: Date.now() + Math.round(Math.random() * 1000000).toString(),
        },
        ...state,
      ];
    }

    case TOGGLE_TODO_STATUS: {
      return state.map((todo) => {
        if (todo.id === action.id) return { ...todo, isDone: !todo.isDone };
        return todo;
      });
    }

    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }

    case REMOVE_COMPLEATED_TODO: {
      return state.filter((todo) => !todo.isDone);
    }

    case REPLACE_TODO_ITEMS: {
      const firstItemIdPosition = state.findIndex(
        (todo) => todo.id === action.firstItemId
      );
      const secondItemIdPosition = state.findIndex(
        (todo) => todo.id === action.secondItemId
      );
      const newArray = [...state];
      newArray.splice(firstItemIdPosition, 1);
      newArray.splice(secondItemIdPosition, 0, state[firstItemIdPosition]);
      return newArray;
    }

    default:
      return state;
  }
};

export default todosReducer;
