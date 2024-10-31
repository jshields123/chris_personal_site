import styles from "./SubHeading.module.css";

const SubHeading = ({ text }) => {
  return (
    <>
      <h2 className={styles.subheading}>{text}</h2>
    </>
  );
};

export { SubHeading };
