import styles from "./Paragraph.module.css";
import { PARAGRAPH_CONTENT } from "./Paragraph.constants";

const Paragraph = ({ text }) => {
  return <p className={styles.paragraph}>{text}</p>;
};

export { Paragraph };
