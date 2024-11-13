import styles from "./PodcastVideo.module.css";

const PodcastVideo = () => {
  return (
    <div>
      <iframe
        className={styles.video}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vcU2_DQIL0s?si=eLw3WrIMophacmQ9"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export { PodcastVideo };
