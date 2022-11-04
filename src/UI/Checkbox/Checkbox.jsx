import styles from "./Checkbox.module.css";

const Checkbox = () => {
  return (
    <label htmlFor="fdas" className={styles.Checkbox}>
      <input type="checkbox" id="fdas" />
      <div className={`${styles.CheckboxBlock} `}></div>
    </label>
  );
};

export default Checkbox;
