"use client";
import styles from "./AboutSection.module.css";
import Image from "next/image";
import { WhoIs } from "../WhoIs";
import { Paragraph } from "../Paragraph";
import { Button } from "../Button";

import { WHOIS_CONTENT } from "../WhoIs/WhoIs.constants";
import {
  PARAGRAPH_CONTENT,
  PARAGRAPH_CONTENT_EXTENDED_PT1,
  PARAGRAPH_CONTENT_EXTENDED_PT2,
  PARAGRAPH_CONTENT_EXTENDED_PT3,
} from "../Paragraph/Paragraph.constants";

const AboutSection = () => {
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
          src={"/images/chris-v1.png"}
          alt="chris_2"
          height={260}
          width={350}
          className={styles.image}
        />
        <Paragraph text={PARAGRAPH_CONTENT} />
        <br />
        <Paragraph text={PARAGRAPH_CONTENT_EXTENDED_PT1} />
        <br />
        <Paragraph text={PARAGRAPH_CONTENT_EXTENDED_PT2} />
        <br />
        <Paragraph text={PARAGRAPH_CONTENT_EXTENDED_PT3} />
      </div>
      <Button text={"Contact Today!"} isDisabled={false} onClick={onClick} />
    </div>
  );
};

export { AboutSection };
