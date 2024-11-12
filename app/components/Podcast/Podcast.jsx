import styles from "./Podcast.module.css";
const Podcast = () => {
  return (
    <>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/show/3WzAqZ9nwdFlcmRJCNZiM2?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      ;
    </>
  );
};

export { Podcast };
