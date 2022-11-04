import { createStore, combineReducers } from "redux";
import filterReducer from "./reducers/filter";
import todosReducer from "./reducers/todos";

const store = createStore(
  combineReducers({
    todos: todosReducer,
    filter: filterReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
