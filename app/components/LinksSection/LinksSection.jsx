import { LinksList } from "../LinksList";
import { THIRD_HEADING_TEXT, ThirdHeading } from "../ThirdHeading";
import styles from "./LinksSection.module.css";
import Image from "next/image";

const LinksSection = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"/images/lion_cvd_logo.svg"}
        alt={"cvd-logo"}
        height={78}
        width={326}
        className={styles.logo}
        loading={"lazy"}
        quality={100}
      />
      <ThirdHeading className={styles.subheading} />
      <div className={styles.links}>
        <LinksList />
      </div>
    </div>
  );
};

export { LinksSection };
