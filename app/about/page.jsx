import styles from "./page.module.css";
import { Navbar } from "../components/Navbar";
import { AboutSection } from "../components/AboutSection";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <AboutSection />
      </main>
    </div>
  );
}
