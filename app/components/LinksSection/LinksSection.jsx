import { LinksList } from "../LinksList";
import { ThirdHeading } from "../ThirdHeading";
import styles from "./LinksSection.module.css";
import Image from "next/image";

const LinksSection = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src="/chris-rect-white.png"
        alt="cvd-logo"
        height={90}
        width={326}
      />
      <ThirdHeading
        className={styles.subheading}
        text={"Director of CVD Glass | Founder & CEO of CVD Windows and Doors"}
      />
      <div className={styles.links}>
        <LinksList />
      </div>
    </div>
  );
};

export { LinksSection };
