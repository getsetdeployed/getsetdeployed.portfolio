"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";
import Image from "next/image";

// Define the props for the IconCloud component
export type DynamicCloudProps = {
  iconSlugs?: string[];
  imageArray?: string[];
};

// Cloud configuration
const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// Function to render custom icons
const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#0E1016" : "#0E1016";
  const fallbackHex = "#e4ded7";
  const minContrastRatio = 2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
  });
};

// IconCloud component
export function IconCloud({
  iconSlugs = [],
  imageArray = [],
}: DynamicCloudProps) {
  const [data, setData] = useState<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon: unknown, index: number) =>
      renderCustomIcon(icon as SimpleIcon, theme || "light"),
    );
  }, [data, theme]);

  return (
    <div className="h-full w-full">
      {/* @ts-ignore */}
      <Cloud {...cloudProps}>
        <>
          {renderedIcons}
          {imageArray.map((image, index) => (
            <a key={index} href="#" onClick={(e) => e.preventDefault()}>
              <Image src={image} alt="icon" width={42} height={42} />
            </a>
          ))}
        </>
      </Cloud>
    </div>
  );
}

export default IconCloud;
