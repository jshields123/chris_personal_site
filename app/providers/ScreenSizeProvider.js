"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

const ScreenSizeContext = createContext();

export function ScreenSizeProvider({ children }) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={isMobile}>
      {children}
    </ScreenSizeContext.Provider>
  );
}

export const useScreenSize = () => useContext(ScreenSizeContext);
