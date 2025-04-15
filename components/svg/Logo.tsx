import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 300, height = 300 }) => {
  return (
    <Image
      className={`w-${width} h-${height}`}
      src="/GetSetDeployed.png"
      alt="Logo"
      width={width}
      height={height}
    />
  );
};

export default Logo;
