import styles from "./LinksList.module.css";
import { BUSINESS_LINKS, SOCIAL_LINKS } from "./LinksList.constants.js";
import { SocialIcon } from "react-social-icons";

const LinksList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.business}>
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
      </div>
      <div className={styles.socials}>
        <h3 id="socials" className={styles.title}>
          Socials
        </h3>
        <ul className={styles.social_list}>
          {SOCIAL_LINKS.map(({ id, linkHref, name }) => {
            return (
              <li key={id} className={styles.li}>
                <SocialIcon bgColor={"rgb(0, 89, 231)"} url={linkHref} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { LinksList };
