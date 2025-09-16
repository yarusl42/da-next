import service4 from "@/assets/service_4.avif"
import service3 from "@/assets/service_3.avif"
import service2 from "@/assets/service_2.avif"
import service1 from "@/assets/service_1.avif"
import type { QAndAItem } from "@/components/QAndAList";

export const servicesData: QAndAItem[] = [
  {
    id: "web-design",
    title: "Web design & development",
    description:
      "Modern, fast, and mobile-friendly websites tailored to your business, designed to convert visitors into customers.",
    image: service1.src,
  },
  {
    id: "seo",  
    title: "Google Rankings (SEO)",
    description:
      "We optimize your website and content to help you rank higher on Google for local searches and attract the right customers.",
    image: service2.src,
  },
  {
    id: "lead-generation",
    title: "Lead Generation Funnels",
    description:
      "Custom landing pages and funnels that drive phone calls, bookings, and inquiries for your business.",
    image: service3.src,
  },
  {
    id: "website-care",
    title: "Website Care & Growth",
    description:
      "Ongoing maintenance and updates, monthly SEO reports, and continuous optimization for better rankings and performance.",
    image: service4.src,
  },
];
