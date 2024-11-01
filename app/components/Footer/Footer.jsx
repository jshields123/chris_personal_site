import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        © Chris Van Dijk | Site by{" "}
        <a className={styles.link} href="https://jackcyber.pro">
          jackcyberpro
        </a>
      </p>
    </div>
  );
};

export { Footer };
