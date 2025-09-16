export type PageSEO = {
  title: string;
  description: string;
  siteName?: string;
};

// Define per-page SEO here. Keys are pathname prefixes.
// The first key that matches the start of the current pathname will be used.
export const SEO_MAP: Record<string, PageSEO> = {
  "/": {
    title: "Skynex Digital Agency",
    description: "Professional, conversion-focused digital agency website",
    siteName: "Skynex Digital",
  },
  "/about": {
    title: "About — Skynex Digital",
    description: "Who we are and how we deliver results.",
    siteName: "Skynex Digital",
  },
  "/services": {
    title: "Services — Skynex Digital",
    description: "Web design, SEO, and growth services to drive results.",
    siteName: "Skynex Digital",
  },
  "/projects": {
    title: "Projects — Skynex Digital",
    description: "Selected work and case studies.",
    siteName: "Skynex Digital",
  },
  "/projects/example-project": {
    title: "ACME Company Case Study — Skynex Digital",
    description: "Digital transformation case study: UI/UX, development, and optimization delivering measurable results.",
    siteName: "Skynex Digital",
  },
  "/contact": {
    title: "Contact — Skynex Digital",
    description: "Let’s talk about your goals.",
    siteName: "Skynex Digital",
  },
  "/services/web-design": {
    title: "Web Design & Development — Skynex Digital",
    description: "Fast, modern websites crafted to convert — strategy, UX, build, and launch end‑to‑end.",
    siteName: "Skynex Digital",
  },
  "/services/seo": {
    title: "SEO Services — Skynex Digital",
    description: "Technical SEO, content, and local optimization to rank higher and drive qualified traffic.",
    siteName: "Skynex Digital",
  },
  "/services/lead-generation": {
    title: "Lead Generation Funnels — Skynex Digital",
    description: "Targeted landing pages and friction‑free flows that turn clicks into booked calls and inquiries.",
    siteName: "Skynex Digital",
  },
};

const DEFAULT_TITLE = "Skynex Digital Agency";
const DEFAULT_DESCRIPTION = "Professional, conversion-focused digital agency website";
const SITE_NAME = "Skynex Digital";


export function getSeoForPath(pathname: string): PageSEO | null {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  // Sort keys longest-first so more specific paths win
  const key = Object.keys(SEO_MAP)
    .sort((a, b) => b.length - a.length)
    .find((k) => normalized.startsWith(k));
  return key ? SEO_MAP[key] : {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
  };
}
