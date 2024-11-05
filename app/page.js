"use client";
import { IntroSection } from "./components/IntroSection";
import { WhoIsSection } from "./components/WhoIsSection";
import { LinksSection } from "./components/LinksSection";
import { Navbar } from "./components/Navbar";

import styles from "./page.module.css";
import { Footer } from "./components/Footer";
import { FOOTER_CONTENT } from "./components/Footer/Footer.constants";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <IntroSection />
        <WhoIsSection />
        <LinksSection />
      </main>
      <Footer link={FOOTER_CONTENT.linkHref} text={FOOTER_CONTENT.text} />
    </div>
  );
}
