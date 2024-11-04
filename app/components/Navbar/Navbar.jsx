"use client";
import styles from "./Navbar.module.css";
import { NAVBAR_ITEMS } from "./Navbar.constants.js";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";

const Navbar = ({ isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src={"/cvd.png"}
            alt={"cvd-logo"}
            height={isMobile ? 80 : 100}
            width={isMobile ? 80 : 100}
            priority
          />
        </div>

        <div className={styles.hamburger}>
          {isMobile && (
            <Hamburger
              size={60}
              color="white"
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
            />
          )}
        </div>

        {!isMobile && (
          <nav className={styles.navlist}>
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
      </div>
      {isMenuOpen && (
        <nav className={styles.navlist}>
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
    </>
  );
};

export { Navbar };
