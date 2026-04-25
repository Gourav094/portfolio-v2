"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRef } from "react";

const LINKS = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Blog",    href: "#blog" },
  { label: "Contact", href: "#contact" },
  { label: "Resume",  href: "#resume" },
];

const MotionLink = motion(Link);

function MagneticLink({
  link,
  isActive,
  index,
}: {
  link: { label: string; href: string };
  isActive: boolean;
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 18 });
  const y = useSpring(rawY, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    rawX.set((e.clientX - (rect.left + rect.width / 2)) * 0.35);
    rawY.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <MotionLink
      ref={ref}
      href={link.href}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative text-[16px] font-medium select-none cursor-pointer"
    >
      <span style={{
        color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.32)",
        transition: "color 0.2s",
        display: "block",
      }}>
        {link.label}
      </span>
    </MotionLink>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const getActive = () => {
    if (pathname === "/about") return "About";
    if (pathname === "/blog") return "Blog";
    return "Home";
  };

  const active = getActive();

  return (
    <nav className="fixed top-0 right-0 z-50 flex items-center gap-10 px-12 py-7">
      {LINKS.map((link, i) => (
        <MagneticLink
          key={link.label}
          link={link}
          isActive={active === link.label}
          index={i}
        />
      ))}
    </nav>
  );
}
