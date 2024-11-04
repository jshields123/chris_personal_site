"use client";
import { IntroSection } from "./components/IntroSection";
import { WhoIsSection } from "./components/WhoIsSection";
import { LinksSection } from "./components/LinksSection";
import { Navbar } from "./components/Navbar";

import { useScreenSize } from "./providers/ScreenSizeProvider";

import styles from "./page.module.css";
import { Footer } from "./components/Footer";

export default function Home() {
  const isMobile = useScreenSize();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar isMobile={isMobile} />
        <IntroSection />
        <WhoIsSection isMobile={isMobile} />
        <LinksSection />
      </main>
      <Footer />
    </div>
  );
}
