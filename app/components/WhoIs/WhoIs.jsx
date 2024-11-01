import styles from "./WhoIs.module.css";

const WhoIs = () => {
  return (
    <>
      <h2 className={styles.whois}>
        Who is
        <span className={styles.cvd}> Chris Van Dijk?</span>
      </h2>
    </>
  );
};

export { WhoIs };
