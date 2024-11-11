import styles from "./WhoIsSection.module.css";
import { WhoIs } from "../WhoIs";
import { WHOIS_CONTENT } from "../WhoIs/WhoIs.constants";
import { Paragraph } from "../Paragraph";
import { PARAGRAPH_CONTENT } from "../Paragraph/Paragraph.constants";
import { Button } from "../Button";
import Image from "next/image";
import Link from "next/link";

const WhoIsSection = () => {
  const onClick = () => {
    (window.location.href = "mailto:chris@cvdglass.com"),
      "_blank",
      "noopener noreferrer";
  };

  return (
    <div id="bio" className={styles.container}>
      <WhoIs text={WHOIS_CONTENT} />
      <div className={styles.content}>
        <Image
          src={"/images/chris_2.png"}
          alt="chris_2"
          height={260}
          width={350}
          className={styles.image}
        />
        <Paragraph text={PARAGRAPH_CONTENT} />
      </div>
      <Link href="/about">
        <Button text={"Read More"} isDisabled={false} />
      </Link>
    </div>
  );
};

export { WhoIsSection };
