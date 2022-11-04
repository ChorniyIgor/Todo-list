import Header from "./components/Header/Header";
import styles from "./App.module.css";
import CreateNewTodoForm from "./components/CreateNewTodoForm/CreateNewTodoForm";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <CreateNewTodoForm />
      <TodoList />
      <Filter />
      <Footer />
    </div>
  );
}

export default App;
