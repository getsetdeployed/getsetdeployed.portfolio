// navbarcontainer.tsx
import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  CSSProperties,
} from "react";

interface NavContainerProps {
  children: ReactNode;
  width: string | number;
  height: string | number;
  color?: string;
  borderRadius?: string;
  blur?: boolean;
  top?: string;
  left?: string;
  angle?: number;
  spotlightColor?: string;
  accentColor?: string;
}

const NavContainer: React.FC<NavContainerProps> = ({
  children,
  width,
  height,
  color = "transparent",
  borderRadius = "0px",
  blur = false,
  top,
  left,
  angle = 0,
  spotlightColor = "rgba(255,255,255,0.1)",
  accentColor = "rgba(255,255,255,0.05)",
}) => {
  const [cursorX, setCursorX] = useState<number>(0);
  const [cursorY, setCursorY] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = currentRef.getBoundingClientRect();
      setCursorX(e.clientX - rect.left);
      setCursorY(e.clientY - rect.top);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    currentRef.addEventListener("mousemove", handleMouseMove);
    currentRef.addEventListener("mouseenter", handleMouseEnter);
    currentRef.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      currentRef.removeEventListener("mousemove", handleMouseMove);
      currentRef.removeEventListener("mouseenter", handleMouseEnter);
      currentRef.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const containerStyle: CSSProperties = {
    position: "relative",
    width,
    height,
    top,
    left,
    borderRadius,
    backgroundColor: color,
    overflow: "visible",
    backdropFilter: blur ? "blur(12px)" : "none",
    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.2)",
    border: `1px solid ${accentColor}`,
    transform: angle ? `rotate(${angle}deg)` : undefined,
  };

  const spotlightStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius,
    background: `radial-gradient(circle 150px at ${cursorX}px ${cursorY}px, ${spotlightColor}, transparent)`,
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

export default NavContainer;
