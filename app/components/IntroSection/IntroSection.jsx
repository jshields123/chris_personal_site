"use client";
import React from "react";

import { ImageOverlay } from "../ImageOverlay";
import { Hero } from "../Hero";
import { HERO_CONTENT } from "../Hero/Hero.constants";

import Image from "next/image";

import { THIRD_HEADING_TEXT } from "../ThirdHeading/ThirdHeading.constants";

import styles from "./IntroSection.module.css";
import { ThirdHeading } from "../ThirdHeading/ThirdHeading";

const IntroSection = () => {
  return (
    <div className={styles.container}>
      <ImageOverlay
        shouldHavePriority={true}
        imageSrc="/images/skyline.jpg"
        alt="city skyline"
        children={
          <div className={styles.content}>
            <div className={styles.hero_and_image_combo}>
              <Hero text={HERO_CONTENT} />
              <Image
                src={"/images/chris_1.png"}
                alt="chris_2"
                height={623}
                width={554}
                className={styles.hero_image}
              />
            </div>
            <ThirdHeading text={THIRD_HEADING_TEXT} />
          </div>
        }
      ></ImageOverlay>
    </div>
  );
};

export { IntroSection };
