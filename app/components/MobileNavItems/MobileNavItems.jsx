import styles from "./MobileNavItems.module.css";
import { NAVBAR_ITEMS } from "../Navbar/Navbar.constants";
import { NavItem } from "../NavItem/NavItem";

const MobileNavItems = () => (
  <nav>
    <ul className={styles.ul}>
      {NAVBAR_ITEMS.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
    </ul>
  </nav>
);

export { MobileNavItems };
