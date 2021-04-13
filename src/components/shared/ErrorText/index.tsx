import styles from "./styles.module.css";

const ErrorText = ({ isError, errorText }: any) =>
  isError ? <div className={styles.error}>{errorText}</div> : null;

export default ErrorText;
