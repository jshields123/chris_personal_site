import styles from "./NavItem.module.css";
import Link from "next/link";
const NavItem = ({ item }) => {
  const { text, linkHref, id } = item;

  // Check if the link is a mailto link
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

  // Check if it's a scroll link (e.g., #about)
  if (linkHref.startsWith("#")) {
    return (
      <li>
        <a className={styles.text} href={linkHref}>
          {text}
        </a>
      </li>
    );
  }

  // For internal Next.js links
  return (
    <li>
      <Link className={styles.text} href={linkHref}>
        {text}
      </Link>
    </li>
  );
};

export { NavItem };
