import { SubHeading } from "../SubHeading";
import { Podcast } from "../Podcast";

const PodcastSection = () => {
  return (
    <div className={styles.container}>
      <SubHeading text={"Listen to Elevate Your Game Podcast Here"} />
      <div className={styles.content}>
        <Podcast />
      </div>
    </div>
  );
};

export { PodcastSection };
