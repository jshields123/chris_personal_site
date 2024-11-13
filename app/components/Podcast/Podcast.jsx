import styles from "./Podcast.module.css";
const Podcast = () => {
  return (
    <>
      <iframe
        className={styles.podcast}
        src="https://open.spotify.com/embed/show/3WzAqZ9nwdFlcmRJCNZiM2?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
};

export { Podcast };
