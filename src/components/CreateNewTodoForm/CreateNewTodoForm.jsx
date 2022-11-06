import Input from "../../UI/Input/Input";
import styles from "./CreateNewTodoForm.module.css";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../store/actions/todos";
import { useEffect, useRef, useState } from "react";

const CreateNewTodoForm = () => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const [isError, setIsError] = useState(false);

  const onFormSubmitHandler = (evt) => {
    evt.preventDefault();
    const value = titleRef.current.inputElem.value.trim();
    if (value !== "") {
      dispatch(addNewTodo(value));
      titleRef.current.cleanInput();
    } else {
      setIsError(true);
    }
  };

  let classes = `${styles.CreateNewTodoForm} ${isError ? styles.onError : ""}`;

  useEffect(() => {
    const id = setTimeout(() => {
      setIsError(false);
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [isError]);

  return (
    // <Container className={classes}>
    //   <Card>
    <form onSubmit={onFormSubmitHandler} className={classes}>
      <Input
        ref={titleRef}
        attr={{
          type: "text",
          placeholder: "Create a new todo…",
        }}
      />
    </form>
    //   </Card>
    // </Container>
  );
};

export default CreateNewTodoForm;
