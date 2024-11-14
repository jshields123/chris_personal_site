import styles from "./NavItem.module.css";
import Link from "next/link";
const NavItem = ({ item }) => {
  const { text, linkHref, id } = item;

  if (linkHref.startsWith("mailto:")) {
    return (
      <li>
        <a
          className={styles.text}
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </li>
    );
  }

  if (linkHref.startsWith("#")) {
    return (
      <li>
        <a className={styles.text} href={linkHref}>
          {text}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link className={styles.text} href={linkHref}>
        {text}
      </Link>
    </li>
  );
};

export { NavItem };
