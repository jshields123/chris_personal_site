import styles from "./Footer.module.css";
import { FOOTER_CONTENT } from "./Footer.constants";
const Footer = ({ link, text }) => {
  return (
    <div className={styles.footer}>
      <p>
        {" "}
        <a className={styles.link} href="https://jackcyber.pro">
          jackcyberpro
        </a>
      </p>
    </div>
  );
};

export { Footer };
