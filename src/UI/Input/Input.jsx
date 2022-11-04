import { useImperativeHandle, useRef, forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef("");

  const cleanInput = () => {
    inputRef.current.value = "";
  };

  useImperativeHandle(ref, () => ({
    inputElem: inputRef.current,
    cleanInput,
  }));

  return (
    <div className={styles.Input}>
      <input {...props.attr} ref={inputRef} />
    </div>
  );
});

export default Input;
