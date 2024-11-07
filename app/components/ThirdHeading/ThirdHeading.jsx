import styles from "./ThirdHeading.module.css";

const ThirdHeading = ({ text }) => {
  return (
    <>
      <h3 className={styles.third_heading}>{text}</h3>
    </>
  );
};

export { ThirdHeading };
