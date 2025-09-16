import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Providers from "./providers";
import ogImage from "@/assets/social_media_thumbnail.jpg";
import { getSeoForPath } from "@/seo";

// If you plan to vary by path or host, ensure dynamic to compute correct canonical per request
export const dynamic = "force-dynamic";

const DEFAULT_SITE = process.env.SITE_URL || "https://skynex.digital";

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const forwardedProto = h.get("x-forwarded-proto") || "https";
  const host = h.get("host");
  // Some deployments (middleware) provide x-pathname; fallback to root
  const path = h.get("x-pathname") || "/";

  const base = DEFAULT_SITE || (host ? `${forwardedProto}://${host}` : "https://skynex.digital");
  const canonical = `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

  // Resolve absolute Open Graph/Twitter image URL
  const rawImagePath = (ogImage as any)?.src ?? (ogImage as any);
  const absImageUrl = typeof rawImagePath === "string"
    ? (rawImagePath.startsWith("http")
        ? rawImagePath
        : `${base.replace(/\/$/, "")}${rawImagePath.startsWith("/") ? "" : "/"}${rawImagePath}`)
    : undefined;
  const imgWidth = (ogImage as any)?.width as number | undefined;
  const imgHeight = (ogImage as any)?.height as number | undefined;

  const pageSeo = getSeoForPath(path);

  return {
    metadataBase: new URL(base),
    title: pageSeo.title,
    description: pageSeo.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageSeo.title,
      description: pageSeo.description,
      siteName: pageSeo.siteName,

      url: canonical,
      type: "website",
      images: absImageUrl
        ? [
            {
              url: absImageUrl,
              width: imgWidth,
              height: imgHeight,
              alt: pageSeo.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: pageSeo.title,
      description: pageSeo.description,
      images: absImageUrl ? [absImageUrl] : undefined,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
