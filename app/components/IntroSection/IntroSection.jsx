"use client";
import React from "react";

import { ImageOverlay } from "../ImageOverlay";
import { Hero } from "../Hero";
import Image from "next/image";
import { SubHeading } from "../SubHeading";

import styles from "./IntroSection.module.css";

const IntroSection = () => {
  return (
    <div className={styles.container}>
      <ImageOverlay
        shouldHavePriority={true}
        imageSrc="/images/skyline.jpg"
        alt="city skyline"
        children={
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
                "Brief intro to yourself, Chris Van Dyke, business owner and entrepreneur."
              }
            />
          </div>
        }
      ></ImageOverlay>
    </div>
  );
};

export { IntroSection };
