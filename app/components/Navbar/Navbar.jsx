"use client";
import styles from "./Navbar.module.css";
import { NAVBAR_ITEMS } from "./Navbar.constants.js";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import { MobileNavItems } from "../MobileNavItems";
import { NavItem } from "../NavItem";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={"/images/new_logo.svg"}
              alt={"cvd-logo"}
              height={78}
              width={326}
              className={styles.logo}
              loading={"lazy"}
              quality={100}
            />
          </Link>
        </div>

        <div className={styles.hamburger}>
          <Hamburger
            size={60}
            color="white"
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
          />
        </div>

        <nav className={styles.navlist}>
          <ul className={styles.ul}>
            {NAVBAR_ITEMS.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </ul>
        </nav>
      </div>
      {isMenuOpen && <MobileNavItems />}
    </>
  );
};

export { Navbar };
