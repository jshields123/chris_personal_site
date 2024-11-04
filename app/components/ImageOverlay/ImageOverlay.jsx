import styles from "./ImageOverlay.module.css";

import Image from "next/image";

const ImageOverlay = ({
  children,
  imageSrc,
  alt,
  shouldHavePriority,
  isMobile,
}) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageSrc}
        alt={alt}
        className={`${styles.intro__image}`}
        priority={shouldHavePriority ? true : undefined}
        fill
      />
      <div className={styles.overlay}>{children}</div>
    </div>
  );
};

export { ImageOverlay };
