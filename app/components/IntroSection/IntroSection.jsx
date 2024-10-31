"use client";
import React from "react";

import { useScreenSize } from "../../providers/ScreenSizeProvider";
import { ImageOverlay } from "../ImageOverlay";
import { Hero } from "../Hero";
import Image from "next/image";
import { SubHeading } from "../SubHeading";

import styles from "./IntroSection.module.css";

const IntroSection = () => {
  const isMobile = useScreenSize();

  return (
    <div className={styles.container}>
      {isMobile ? (
        <div className={styles.content}>
          <Hero />
          <Image
            src={"/images/bloke.png"}
            alt="bloke"
            height={380}
            width={400}
          />
          <SubHeading
            text={
              "Brief intro to yourself, Chris van dyke, business owner and entrepreneur."
            }
          />
        </div>
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
