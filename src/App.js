import Header from "./components/Header/Header";
import styles from "./App.module.css";
import CreateNewTodoForm from "./components/CreateNewTodoForm/CreateNewTodoForm";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <CreateNewTodoForm></CreateNewTodoForm>
    </div>
  );
}

export default App;
