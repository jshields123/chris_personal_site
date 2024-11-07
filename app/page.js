"use client";
import { IntroSection } from "./components/IntroSection";
import { WhoIsSection } from "./components/WhoIsSection";
import { LinksSection } from "./components/LinksSection";
import { Navbar } from "./components/Navbar";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <IntroSection />
        <WhoIsSection />
        <LinksSection />
      </main>
    </div>
  );
}
