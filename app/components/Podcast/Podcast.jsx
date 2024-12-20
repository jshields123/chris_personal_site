import styles from "./Podcast.module.css";
import { useEffect, useState } from "react";
const Podcast = () => {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    setShowIframe(true);
  }, []);
  return (
    <>
      {showIframe && (
        <iframe
          title="Podcast"
          className={styles.podcast}
          src="https://open.spotify.com/embed/show/3WzAqZ9nwdFlcmRJCNZiM2?utm_source=generator"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
    </>
  );
};

export { Podcast };
