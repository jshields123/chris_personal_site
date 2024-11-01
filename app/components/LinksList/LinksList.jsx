import styles from "./LinksList.module.css";
import { BUSINESS_LINKS, SOCIAL_LINKS } from "./LinksList.constants.js";

const LinksList = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Businesses</h3>
      <ul className={styles.list}>
        {BUSINESS_LINKS.map(({ id, linkHref, name }) => {
          return (
            <li key={id} className={styles.li}>
              <a
                className={styles.link}
                href={linkHref}
                style={{ border: "none", background: "none", padding: 0 }}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
      <h3 className={styles.title}>Socials</h3>
      <ul className={styles.list}>
        {SOCIAL_LINKS.map(({ id, linkHref, name }) => {
          return (
            <li key={id} className={styles.li}>
              <a
                className={styles.link}
                href={linkHref}
                style={{ border: "none", background: "none", padding: 0 }}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { LinksList };
