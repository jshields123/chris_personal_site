"use client";
import { IntroSection } from "./components/IntroSection";
import { WhoIsSection } from "./components/WhoIsSection";
import { Navbar } from "./components/Navbar";
import { useScreenSize } from "./providers/ScreenSizeProvider";

import styles from "./page.module.css";

export default function Home() {
  const isMobile = useScreenSize();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar isMobile={isMobile} />
        <IntroSection />
        <WhoIsSection />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
