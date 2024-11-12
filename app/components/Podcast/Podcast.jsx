import styles from "./Podcast.module.css";
const Podcast = () => {
  return (
    <>
      <iframe
        className={styles.podcast}
        src="https://open.spotify.com/embed/show/3WzAqZ9nwdFlcmRJCNZiM2?utm_source=generator&theme=0"
        height="352"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
};

export { Podcast };
