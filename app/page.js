import { Navbar } from "./components/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
