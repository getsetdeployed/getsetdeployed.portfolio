// FloatingDock.tsx
import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import NavContainer from "../container/Navbarcontainer";

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

type FloatingDockProps = {
  items: NavItem[];
  className?: string;
};

const FloatingDock: React.FC<FloatingDockProps> = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <NavContainer
      width="auto"
      height="80px"
      color="rgba(15, 15, 15, 0.9)"
      borderRadius="50px"
      top="0px"
      left="0px"
      angle={0}
      blur={false}
      spotlightColor="rgba(255, 255, 255, 0.4)"
      accentColor="rgba(255, 255, 255, 0.8)"
    >
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`flex items-center justify-center h-full gap-6 px-6 ${className}`}
      >
        {items.map((item) => (
          <IconContainer mouseX={mouseX} key={item.title} {...item} />
        ))}
      </motion.div>
    </NavContainer>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: NavItem & { mouseX: MotionValue<number> }) {
  let ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [60, 100, 60]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [60, 100, 60]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link href={href} className="relative">
      <motion.div
        ref={ref}
        style={{
          width,
          height,
          zIndex: hovered ? 10 : 1,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center mx-auto"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-white/10"
          style={{
            width,
            height,
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.2)",
          }}
        />
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-3 py-1 whitespace-pre rounded-md bg-white text-black font-medium absolute left-1/2 -translate-x-1/2 -top-10 w-fit text-sm"
              style={{ zIndex: 20 }}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="flex items-center justify-center text-white"
          style={{
            width: useTransform(width, (w) => w * 0.4),
            height: useTransform(height, (h) => h * 0.4),
          }}
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default FloatingDock;
