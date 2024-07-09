import { useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { gsap } from "gsap";

const SOCIAL_LINKS = [
  {
    title: "Instagram",
    href: "https://www.instagram.com",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com",
  },
  {
    title: "GitHub",
    href: "https://www.github.com",
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  useEffect(() => {
    gsap.from(".footer-title", {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
    });
    gsap.from(".footer-link", {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      delay: 0.5,
    });
    gsap.from(".footer-copy", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1,
    });

    const movingElements = document.querySelectorAll(".moving-element");
    movingElements.forEach((element) => {
      gsap.to(element, {
        x: "random(-200, 200)",
        y: "random(-200, 200)",
        duration: 10,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  return (
    <footer className="relative px-4 pt-12 pb-4 bg-[fixed top-0 z-50 border-0 bg-green-600] text-black overflow-hidden">
      <div className="container max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <div className="flex flex-col md:flex-row justify-between w-full mb-6">
          <div className="mb-4 md:mb-0">
            <Typography variant="h6" className="footer-title">
              Follow Us
            </Typography>
            <ul className="mt-2">
              {SOCIAL_LINKS.map(({ title, href }) => (
                <li key={title}>
                  <Typography
                    as="a"
                    href={href}
                    target="_blank"
                    className="block py-1 font-normal text-black transition-colors hover:text-gray-700 footer-link"
                  >
                    {title}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Typography variant="h6" className="footer-title">
              Contact Us
            </Typography>
            <Typography className="mt-2 text-black">
              Email: shreepaadamc2003@gmail.com
            </Typography>
            <Typography className="text-black">
              Phone: +91 6360271157
            </Typography>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="font-normal text-black footer-copy"
        >
          &copy; {CURRENT_YEAR} Made by{" "}
          <a
            href="https://www.material-tailwind.com"
            target="_blank"
            className="hover:text-gray-700"
          >
            Shreepaada M C
          </a>
          .
        </Typography>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="moving-element w-24 h-24 bg-[#a8e6cf] rounded-full absolute"></div>
        <div className="moving-element w-16 h-16 bg-[#dcedc1] rounded-full absolute"></div>
        <div className="moving-element w-20 h-20 bg-[#ffd3b6] rounded-full absolute"></div>
      </div>
    </footer>
  );
}

export default Footer;
