import styles from "./WhoIs.module.css";

const WhoIs = ({ text }) => {
  return <h2 className={styles.whois}>{text}</h2>;
};

export { WhoIs };
