"use client";
import React from "react";

import { useScreenSize } from "../../providers/ScreenSizeProvider";
import { ImageOverlay } from "../ImageOverlay";
import { Hero } from "../Hero";

const IntroSection = () => {
  const isMobile = useScreenSize();

  return (
    <div>
      {isMobile ? (
        <Hero />
      ) : (
        <ImageOverlay
          shouldHavePriority={true}
          imageSrc="/images/skyline.jpg"
          alt="city skyline"
          children={<Hero />}
        ></ImageOverlay>
      )}
    </div>
  );
};

export { IntroSection };
