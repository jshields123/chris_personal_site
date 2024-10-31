"use client";
import React from "react";

import { useScreenSize } from "../../providers/ScreenSizeProvider";
import { ImageOverlay } from "../ImageOverlay";

const IntroSection = () => {
  const isMobile = useScreenSize();
  console.log(isMobile);
  return (
    <div>
      <ImageOverlay
        shouldHavePriority={true}
        isMobile={!isMobile}
        imageSrc="/images/skyline.jpg"
        alt="city skyline"
      ></ImageOverlay>
    </div>
  );
};

export { IntroSection };
