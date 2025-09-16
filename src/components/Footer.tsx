import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import bigLogo from "@/assets/SKYNEX.png"
import { CONTACT } from "@/data/contact";
import redditIcon from "@/assets/reddit.svg";
import Link from "next/link";

// Simple labeled block wrapper to keep markup consistent
const LabeledBlock: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="space-y-1">
    <div className="text-xs text-primary-foreground/60 mb-1">{label}</div>
    {children}
  </div>
);

// Reusable social icon link
const SocialLink: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-block"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-[#303030] text-primary-foreground py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 pt-12 md:pt-20">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
              <LabeledBlock label="Email">
                <div className="text-sm md:text-base">{CONTACT.email}</div>
              </LabeledBlock>
              <LabeledBlock label="Call Today">
                <div className="text-sm md:text-base">{CONTACT.phone}</div>
              </LabeledBlock>
              <LabeledBlock label="Follow">
                <div className="flex items-center gap-4 text-lg md:text-xl">
                  <SocialLink href={CONTACT.socials.facebook} label="Skynex on Facebook">
                    <Facebook className="h-6 w-6 hover:opacity-80 transition" />
                  </SocialLink>
                  <SocialLink href={CONTACT.socials.twitter} label="Skynex on Twitter">
                    <Twitter className="h-6 w-6 hover:opacity-80 transition" />
                  </SocialLink>
                  <SocialLink href={CONTACT.socials.instagram} label="Skynex on Instagram">
                    <Instagram className="h-6 w-6 hover:opacity-80 transition" />
                  </SocialLink>
                  {/* Additional links: Facebook and Reddit */}
                  <SocialLink href={CONTACT.socials.linkedin} label="Skynex on LinkedIn">
                    <Linkedin className="h-6 w-6 hover:opacity-80 transition" />
                  </SocialLink>
                  <SocialLink href={CONTACT.socials.reddit} label="Skynex on Reddit">
                    <img src={redditIcon} className="h-6 w-6 hover:opacity-80 transition" alt="Reddit" />
                  </SocialLink>
                </div>
              </LabeledBlock>
            {/* Navigation column */}
            <nav className="space-y-1">
              <div className="text-xs text-primary-foreground/60 mb-1">Navigate</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="block hover:opacity-80 transition text-sm md:text-base">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="block hover:opacity-80 transition text-sm md:text-base">About</Link>
                </li>
                <li>
                  <Link href="/projects" className="block hover:opacity-80 transition text-sm md:text-base">Projects</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="border-t border-primary-foreground/10 py-4 md:py-6">
            <p className="text-xs text-primary-foreground/60">
              © Copyright 2025. All Rights Reserved by Skynex
            </p>
          </div>
          
        </div>
      </div>
      <img src={bigLogo.src} alt="Skynex Logo" className="w-full mt-6 md:mt-0" loading="lazy" />
    </footer>
  );
};

export default Footer;
