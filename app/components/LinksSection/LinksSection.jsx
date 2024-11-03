import InstagramPosts from "../InstagramPosts/InstagramPosts";
import { LinksList } from "../LinksList";
import { SubHeading } from "../SubHeading";
import styles from "./LinksSection.module.css";
import Image from "next/image";

const LinksSection = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src="/cvd.png"
        alt="cvd-logo"
        height={100}
        width={100}
      />
      <SubHeading
        className={styles.subheading}
        text={
          "Brief intro to yourself, Chris van dyke, business owner and entrepreneur. "
        }
      />
      <div className={styles.links}>
        <LinksList />
        <InstagramPosts userId="1234567890" accessToken="your_access_token" />
      </div>
    </div>
  );
};

export { LinksSection };
