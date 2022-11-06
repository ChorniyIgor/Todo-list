import Header from "./components/Header/Header";
import styles from "./App.module.css";
import CreateNewTodoForm from "./components/CreateNewTodoForm/CreateNewTodoForm";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Container from "./UI/Container/Container";
import Card from "./UI/Card/Card";
import useWindowSize from "./hooks/useWindowSize";
import { useSelector } from "react-redux";
import { getThemeMode } from "./store/selectors/theme";

function App() {
  const windowSize = useWindowSize();
  const themeMode = useSelector(getThemeMode);

  return (
    <div data-theme={themeMode} className={styles.App}>
      <Header />
      <main>
        <Container className={styles.CreateNewTodoFormContainer}>
          <Card>
            <CreateNewTodoForm />
          </Card>
        </Container>

        <Container className={styles.TodoListContainer}>
          <Card>
            <TodoList />
          </Card>
        </Container>

        {windowSize.width < 580 && (
          <Container className={styles.FilterContainer}>
            <Card>
              <Filter />
            </Card>
          </Container>
        )}
      </main>

      <Container className={styles.FooterContainer}>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
