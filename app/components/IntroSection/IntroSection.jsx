"use client";
import React from "react";

import { ImageOverlay } from "../ImageOverlay";
import { Hero } from "../Hero";
import { HERO_CONTENT } from "../Hero/Hero.constants";

import Image from "next/image";
import { SubHeading } from "../SubHeading";
import { SUB_HEADING_CONTENT } from "../SubHeading/SubHeading.constants";

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
            <Hero text={HERO_CONTENT} />
            <Image
              src={"/images/bloke.png"}
              alt="bloke"
              height={380}
              width={400}
            />
            <SubHeading text={SUB_HEADING_CONTENT} />
          </div>
        }
      ></ImageOverlay>
    </div>
  );
};

export { IntroSection };
