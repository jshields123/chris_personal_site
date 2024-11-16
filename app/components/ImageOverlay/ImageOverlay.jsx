import styles from "./ImageOverlay.module.css";

import Image from "next/image";

const ImageOverlay = ({ children, imageSrc, alt }) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageSrc}
        alt={alt}
        className={`${styles.intro__image}`}
        loading="lazy"
        fill
        quality={100}
      />
      <div className={styles.overlay}>{children}</div>
    </div>
  );
};

export { ImageOverlay };
