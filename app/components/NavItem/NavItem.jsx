import styles from "./NavItem.module.css";
const NavItem = ({ item }) => (
  <li>
    <a className={styles.text} href={item.linkHref}>
      {item.text}
    </a>
  </li>
);

export { NavItem };
