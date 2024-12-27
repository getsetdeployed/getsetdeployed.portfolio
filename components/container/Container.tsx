import React, { useState, useEffect, useRef } from "react";

const Container = ({
  children,
  width,
  height,
  color = "transparent",
  borderRadius = "0px",
  blur = false,
}) => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      setCursorX(e.clientX - rect.left);
      setCursorY(e.clientY - rect.top);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);
    containerRef.current.addEventListener("mouseenter", handleMouseEnter);
    containerRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      containerRef.current.removeEventListener("mousemove", handleMouseMove);
      containerRef.current.removeEventListener("mouseenter", handleMouseEnter);
      containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const containerStyle = {
    position: "relative",
    width: width,
    height: height,
    borderRadius: borderRadius,
    backgroundColor: color,
    overflow: "visible",
    backdropFilter: blur ? "blur(12px)" : "none",
    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.2)",
    border: "1px solid rgba(255,255,255,0.05)",
  };

  const spotlightStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: borderRadius,
    background: `radial-gradient(circle 150px at ${cursorX}px ${cursorY}px, rgba(255,255,255,0.1), transparent)`,
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease",
    pointerEvents: "none",
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      <div style={spotlightStyle} />
      {children}
    </div>
  );
};

export default Container;
