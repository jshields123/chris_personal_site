import { LinksList } from "../LinksList";
import { THIRD_HEADING_TEXT, ThirdHeading } from "../ThirdHeading";
import styles from "./LinksSection.module.css";
import Image from "next/image";

const LinksSection = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src="/images/chris-logo.svg"
        alt="cvd-logo"
        height={90}
        width={326}
        loading="lazy"
      />
      <ThirdHeading className={styles.subheading} />
      <div className={styles.links}>
        <LinksList />
      </div>
    </div>
  );
};

export { LinksSection };
