import React, { useEffect } from "react";
import { Navbar as MTNavbar, Typography } from "@material-tailwind/react";
import { gsap } from "gsap";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium text-white hover:text-gray-300 transition-colors duration-300"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });
    tl.from(".logo", { duration: 1, x: -100, opacity: 0, ease: "power3.out" })
      .from(
        ".navbar-heading",
        { duration: 1, y: -100, opacity: 0, ease: "bounce" },
        "-=0.5"
      )
      .from(
        ".nav-items",
        { duration: 1, x: 100, opacity: 0, ease: "power3.out" },
        "-=0.5"
      )
      .to(".logo", {
        duration: 1,
        rotation: 360,
        scale: 1.1,
        ease: "elastic.out(1, 0.3)",
      })
      .to(
        ".navbar-heading",
        {
          duration: 1,
          scale: 1.1,
          color: "#ffffff",
          ease: "elastic.out(1, 0.3)",
        },
        "-=0.5"
      )
      .to(
        ".nav-items li",
        { duration: 1, scale: 1.1, ease: "elastic.out(1, 0.3)", stagger: 0.2 },
        "-=0.5"
      )
      .to(".logo", {
        duration: 1,
        rotation: 0,
        scale: 1,
        ease: "elastic.out(1, 0.3)",
      })
      .to(
        ".navbar-heading",
        {
          duration: 1,
          scale: 1,
          color: "#ffffff",
          ease: "elastic.out(1, 0.3)",
        },
        "-=0.5"
      )
      .to(
        ".nav-items li",
        { duration: 1, scale: 1, ease: "elastic.out(1, 0.3)", stagger: 0.2 },
        "-=0.5"
      );
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color="green"
      className="fixed top-0 z-50 border-0 bg-green-400"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logos/logo.webp"
            alt="Logo"
            className="logo w-10 h-10 mr-3"
          />
          <Typography variant="h6" className="navbar-heading text-white">
            Interactive Environmental Awareness Platform
          </Typography>
        </div>
        <ul className="ml-10 flex items-center gap-6 nav-items">
          <NavItem>Home</NavItem>
        </ul>
      </div>
    </MTNavbar>
  );
}

export default Navbar;
