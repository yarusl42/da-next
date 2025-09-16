"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/Header";
import NoiseBg from "@/components/NoiseBg";
import Link from "next/link";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <>
    <NoiseBg />
    <div className="min-h-screen relative">
      
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <p className="text-base mb-4">Oops! Page not found</p>
          <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </Link>
        </div>
      </main>
    </div>
    </>
  );
};

export default NotFound;
