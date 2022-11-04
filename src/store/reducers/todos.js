import {
  ADD_NEW_TODO,
  REMOVE_COMPLEATED_TODO,
  REMOVE_TODO,
  TOGGLE_TODO_STATUS,
} from "../consts/todos";

const todosInitialState = [
  {
    title: "Todo 1",
    isDone: false,
    id: 1,
  },
  {
    title: "Todo 2",
    isDone: true,
    id: 2,
  },
  {
    title: "Todo 3",
    isDone: false,
    id: 3,
  },
];

const todosReducer = (state = todosInitialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO: {
      return [
        ...state,
        {
          title: action.title,
          isDone: false,
          id: Date.now() + Math.round(Math.random() * 1000000).toString(),
        },
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

    default:
      return state;
  }
};

export default todosReducer;
