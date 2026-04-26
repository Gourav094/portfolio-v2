"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// SVG Icons as components - Filled versions for active state
const WorkIconFilled = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
  </svg>
);

const WorkIconOutline = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const AboutIconFilled = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const AboutIconOutline = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const BlogIconFilled = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
  </svg>
);

const BlogIconOutline = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const ContactIconFilled = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const ContactIconOutline = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ResumeIconFilled = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>
);

const ResumeIconOutline = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14,2 14,8 20,8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10,9 9,9 8,9"></polyline>
  </svg>
);

const LINKS = [
  { label: "Work",    href: "/", iconFilled: WorkIconFilled, iconOutline: WorkIconOutline },
  { label: "About",   href: "/about", iconFilled: AboutIconFilled, iconOutline: AboutIconOutline },
  { label: "Contact", href: "#contact", iconFilled: ContactIconFilled, iconOutline: ContactIconOutline },
  { label: "Blog",    href: "https://medium.com/@garggourav012", iconFilled: BlogIconFilled, iconOutline: BlogIconOutline },
  { label: "Resume",  href: "https://drive.google.com/file/d/1sRM0keFjY73KyyhYgBhcC-fi1YK3zIxA/view", iconFilled: ResumeIconFilled, iconOutline: ResumeIconOutline },
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 120, damping: 10, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 120, damping: 10, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    rawX.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    rawY.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center px-1 sm:px-2 py-4"
    >
      <MotionLink
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ x, y }}
        className="relative text-[16px] font-medium select-none cursor-pointer px-1.5 sm:px-4 py-1.5 rounded-lg"
      >
        <span style={{
          color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.32)",
          transition: "color 0.2s",
          display: "block",
          position: "relative",
          zIndex: 1,
        }}>
          {link.label}
        </span>
      </MotionLink>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Work");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);

      // Detect if we're in the contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isInContact = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

        if (isInContact) {
          setActiveSection("Contact");
        } else if (pathname === "/about") {
          setActiveSection("About");
        } else {
          setActiveSection("Work");
        }
      } else {
        // Fallback if contact section not found
        if (pathname === "/about") {
          setActiveSection("About");
        } else {
          setActiveSection("Work");
        }
      }
    };

    onScroll(); // Run on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const active = activeSection;

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <nav
        className="hidden sm:flex fixed top-0 left-0 right-0 z-50 items-center justify-end gap-1 px-12 py-7 transition-colors duration-300"
        style={{ background: scrolled ? "#080810" : "transparent" }}
      >
        {LINKS.map((link, i) => (
          <MagneticLink
            key={link.label}
            link={link}
            isActive={active === link.label}
            index={i}
          />
        ))}
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="sm:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="bg-linear-to-b from-[#1a1a24] to-[#0f0f18] rounded-full px-3 py-1 shadow-2xl border border-white/10">
          <div className="flex items-center justify-around">
            {LINKS.map((link, i) => {
              const isActive = active === link.label;
              const Icon = isActive ? link.iconFilled : link.iconOutline;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="relative flex flex-col items-center justify-center gap-1 px-2 py-1.5 min-w-8 group"
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="relative z-10"
                    style={{
                      color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    <Icon />
                  </motion.div>

                  {/* Label */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                    className="relative z-10 text-[11px] font-medium tracking-tight"
                    style={{
                      color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
