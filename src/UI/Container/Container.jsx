import styles from "./Container.module.css";

const Container = (props) => {
  let classNames = `${styles.Container}`;
  if (props.className) classNames = `${styles.Container} ${props.className}`;

  return <div className={classNames}>{props.children}</div>;
};

export default Container;
