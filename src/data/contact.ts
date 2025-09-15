// Centralized contact details for reuse across the app
export const CONTACT = {
  email: "hello@skynex.com",
  phone: "+1 (555) 123-4567",
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    reddit: "https://reddit.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export type ContactData = typeof CONTACT;