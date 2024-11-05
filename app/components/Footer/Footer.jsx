import styles from "./Footer.module.css";
import { FOOTER_CONTENT } from "./Footer.constants";

const Footer = ({ link, copyright_text, linkText }) => {
  return (
    <div className={styles.footer}>
      <p>
        {FOOTER_CONTENT.copyright_text}
        <a className={styles.link} href={FOOTER_CONTENT.link}>
          {FOOTER_CONTENT.linkText}
        </a>
      </p>
    </div>
  );
};

export { Footer };
