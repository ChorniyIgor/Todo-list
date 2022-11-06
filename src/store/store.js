import { createStore, combineReducers } from "redux";
import filterReducer from "./reducers/filter";
import { themeReducer } from "./reducers/theme";
import todosReducer from "./reducers/todos";
import { loadState, saveState } from "./local-storage";

const persistedState = loadState();

const store = createStore(
  combineReducers({
    todos: todosReducer,
    filter: filterReducer,
    theme: themeReducer,
  }),
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});
export default store;
