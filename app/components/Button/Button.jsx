import styles from "./Button.module.css";

const Button = ({ text, isDisabled, onClick }) => {
  return (
    <button
      className={styles.button}
      disabled={isDisabled}
      onClick={onClick}
      title={text}
      aria-label={text}
    >
      {text}
    </button>
  );
};

export { Button };
