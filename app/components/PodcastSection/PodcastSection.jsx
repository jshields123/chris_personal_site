import { SubHeading } from "../SubHeading";

import styles from "./PodcastSection.module.css";
import { Paragraph } from "../Paragraph";
import { PodcastVideo } from "../PodcastVideo";

const PodcastSection = () => {
  return (
    <div className={styles.container} id="podcast">
      <SubHeading text={"Listen to Elevate Your Game Podcast Here"} />
      <div className={styles.content}>
        <Paragraph
          className={styles.paragraph}
          text={
            "Hosted by entrepreneur Chris van Dijk, Elevate Your Game explores the mindset, strategies, and stories behind success. Each episode features insightful conversations with business leaders and industry experts, offering practical advice to elevate your personal and professional life. From business growth to leadership and mindset mastery, this podcast provides the tools needed to reach your full potential."
          }
        />
        <PodcastVideo />
      </div>
    </div>
  );
};

export { PodcastSection };
