"use client";
import { IntroSection } from "./components/IntroSection";
import { WhoIsSection } from "./components/WhoIsSection";
import { Navbar } from "./components/Navbar";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <IntroSection />
        <WhoIsSection />
      </main>
    </div>
  );
}
