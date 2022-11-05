import { createStore, combineReducers } from "redux";
import filterReducer from "./reducers/filter";
import todosReducer from "./reducers/todos";
import { loadState, saveState } from "./selectors/local-storage";

const persistedState = loadState();

const store = createStore(
  combineReducers({
    todos: todosReducer,
    filter: filterReducer,
  }),
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});
export default store;
