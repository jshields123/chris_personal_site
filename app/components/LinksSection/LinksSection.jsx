import { LinksList } from "../LinksList";
import { SubHeading } from "../SubHeading";
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
      <SubHeading
        className={styles.subheading}
        text={
          "Brief intro to yourself, Chris van dyke, business owner and entrepreneur. "
        }
      />
      <div className={styles.links}>
        <LinksList />
      </div>
    </div>
  );
};

export { LinksSection };
