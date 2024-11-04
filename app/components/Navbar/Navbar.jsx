"use client";
import styles from "./Navbar.module.css";
import { NAVBAR_ITEMS } from "./Navbar.constants.js";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import { NavbarSkeleton } from "../NavbarSkeleton/NavbarSkeleton";

const Navbar = ({ isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(true);
  }, [isMobile]);

  if (!isInitialized) {
    return <NavbarSkeleton />; // Don't render anything until isMobile is available
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src={"/chris-rect-white.png"}
            alt={"cvd-logo"}
            height={isMobile ? 56 : 90}
            width={isMobile ? 200 : 326}
            priority
            className={styles.logo}
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
