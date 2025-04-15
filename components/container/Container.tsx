"use client";

import React, { useState, useRef } from "react";
import Grain from "../overlay/Grain";
import { useEventListener } from "usehooks-ts";
import styles from "./Container.module.css";
import { v4 as uuidv4 } from "uuid";

type CustomCSSProperties = React.CSSProperties & {
  "--width"?: string | number;
  "--height"?: string | number;
  "--gradient"?: string;
  "--highlight-color"?: string;
  "--accent-color"?: string;
  "--border-radius"?: string | number;
  "--top"?: string | number;
  "--left"?: string | number;
  "--is-hovered"?: number;
  "--cursor-x"?: string;
  "--cursor-y"?: string;
  "--angle"?: number;
};

type ContainerProps = {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  top?: string | number;
  left?: string | number;
  color: string;
  spotlightColor?: string;
  accentColor?: string;
  blur?: boolean;
  angle?: number;
  baseFrequency?: string;
  numOctaves?: number;
  grain?: boolean; // Add the grain property
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({
  width,
  height,
  top = 0,
  left = 0,
  color,
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  accentColor = "rgba(255, 255, 255, 1.0)",
  blur = true,
  borderRadius = 0,
  angle,
  baseFrequency = "7",
  numOctaves = 3,
  grain = false, // Default to false
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEventListener("mousemove", (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const { left: containerLeft, top: containerTop } = rect;
      const x = e.clientX - containerLeft;
      const y = e.clientY - containerTop;
      setCursorPosition({ x, y });
    }
  });

  const getGradientStyle = () => {
    if (typeof angle === "number" && !isNaN(angle)) {
      return `linear-gradient(${angle}deg, rgba(255, 255, 255, 0) 0%, ${color} 100%)`;
    }
    return color;
  };

  const blurClasses = blur ? "backdrop-blur-[64px]" : "";
  const uniqueId = uuidv4();

  return (
    <div
      id={`canvas-container-${uniqueId}`}
      className={`${styles.container} ${blurClasses}`}
      style={
        {
          "--angle": typeof angle === "number" ? `${angle}deg` : angle,
          "--width": typeof width === "number" ? `${width}px` : width,
          "--height": typeof height === "number" ? `${height}px` : height,
          "--gradient": getGradientStyle(),
          "--spotlight-color": spotlightColor,
          "--accent-color": accentColor,
          "--border-radius": `${borderRadius}px`,
          "--top": `${top}px`,
          "--left": `${left}px`,
          "--is-hovered": isHovered ? 0.5 : 0,
          "--cursor-x": `${cursorPosition.x}px`,
          "--cursor-y": `${cursorPosition.y}px`,
        } as unknown as CustomCSSProperties
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      ref={containerRef}
    >
      {children}
      <div className={styles.accent} />
      <div className={styles.spotlight} />
      <div className={styles.border} />
      <div className={styles.borderHighlight} />
      {grain && (
        <div className={styles.grain}>
          <Grain
            baseFrequency={baseFrequency}
            numOctaves={numOctaves}
            w={width}
            h={height}
          />
        </div>
      )}
    </div>
  );
};

export default Container;
