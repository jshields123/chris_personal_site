import {
  THIRD_HEADING_TEXT_MOB,
  THIRD_HEADING_TEXT_DESK,
} from "./ThirdHeading.constants";
import styles from "./ThirdHeading.module.css";

const ThirdHeading = () => {
  return (
    <>
      <pre>
        <h3 className={styles.third_heading_mobile}>
          {THIRD_HEADING_TEXT_MOB}
        </h3>
      </pre>
      <h3 className={styles.third_heading_desktop}>
        {THIRD_HEADING_TEXT_DESK}
      </h3>
    </>
  );
};

export { ThirdHeading };
