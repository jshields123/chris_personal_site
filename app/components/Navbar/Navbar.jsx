"use client";
import styles from "./Navbar.module.css";
import { NAVBAR_ITEMS } from "./Navbar.constants.js";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useScreenSize } from "../../providers/ScreenSizeProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useScreenSize();

  return (
    <div>
      <div className={styles.hamburger}>
        {isMobile && <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />}
      </div>
      {isMenuOpen && (
        <nav className={styles.navbar}>
          <ul className={styles.ul}>
            {NAVBAR_ITEMS.map((item) => (
              <li key={item.id}>
                <a className={styles.text} href={item.linkHref}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <nav className={styles.desktop_nav}>
        {!isMobile &&
          NAVBAR_ITEMS.map((item) => <li key={item.id}>{item.text}</li>)}
      </nav>
    </div>
  );
};

export { Navbar };
