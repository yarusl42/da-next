import React from "react";

export type NavLinkAnimatedProps = {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  className?: string;
};

export const NavLinkAnimated: React.FC<NavLinkAnimatedProps> = ({ href, label, onClick, className = "" }) => (
  <a href={href} onClick={onClick} className={`group relative inline-block whitespace-nowrap transition-smooth ${className}`}>
    <span className="relative block overflow-hidden">
      <span className="block leading-none transition-transform duration-300 ease-out group-hover:-translate-y-full will-change-transform transform-gpu">
        {label}
      </span>
      <span
        className="absolute inset-0 block leading-none translate-y-full transition-transform duration-300 ease-out will-change-transform transform-gpu text-primary group-hover:translate-y-0"
        aria-hidden="true"
      >
        {label}
      </span>
    </span>
  </a>
);

const NavLinks: React.FC = () => (
  <>
    <NavLinkAnimated href="/" label="Home" />
    <NavLinkAnimated href="/services" label="Services" />
    <NavLinkAnimated href="/about" label="About" />
    <NavLinkAnimated href="/projects" label="Projects" />
    <NavLinkAnimated href="/contact" label="Contact" />
  </>
);

export default NavLinks;


