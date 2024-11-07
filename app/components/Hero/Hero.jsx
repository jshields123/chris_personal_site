import styles from "./Hero.module.css";

const Hero = ({ text }) => {
  return (
    <>
      <h1 className={styles.hero}>{text}</h1>
    </>
  );
};

export { Hero };
