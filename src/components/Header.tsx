import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/lib/scroll";
import NavLinks from "@/components/header/NavLinks";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isHeaderMinimized, setIsHeaderMinimized] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const linksRef = useRef<HTMLDivElement | null>(null); // animated container
  const linksContentRef = useRef<HTMLDivElement | null>(null); // inner content wrapper we measure
  const [linksWidth, setLinksWidth] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Auto-open header shortly after initial mount
  useEffect(() => {
    const t = setTimeout(() => setIsHeaderMinimized(false), 500);
    return () => clearTimeout(t);
  }, []);

  // Measure header links width to enable width animation (auto -> px)
  useLayoutEffect(() => {
    const measure = () => {
      const outer = linksRef.current;
      const inner = linksContentRef.current;
      if (!outer || !inner) return;
      const styles = getComputedStyle(outer);
      const paddingLeft = parseFloat(styles.paddingLeft || "0");
      const paddingRight = parseFloat(styles.paddingRight || "0");
      const contentWidth = inner.scrollWidth; // measure pure content
      const target = Math.max(0, Math.ceil(contentWidth + paddingLeft + paddingRight));
      setLinksWidth(target);
    };
    // Measure on mount and on resize
    measure();
    if ((document as any).fonts?.ready) {
      (document as any).fonts.ready.then(() => measure()).catch(() => {});
    }
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Minimize / expand on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsHeaderMinimized(true);
        } else {
          setIsHeaderMinimized(false);
        }
      } else {
        setIsHeaderMinimized(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Use the exact same logic when mouse leaves the header as when scrolling
  const applyScrollLogicOnce = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY) {
        setIsHeaderMinimized(true);
      } else {
        setIsHeaderMinimized(false);
      }
    } else {
      setIsHeaderMinimized(false);
    }
  };

  // scrollToContact moved to '@/lib/scroll'

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 bg-transparent py-0 md:py-2`}>
      <div className="max-w-none md:max-w-6xl mx-auto px-0 md:px-6 w-full">
        <div className="flex justify-center">
          <motion.div
            className="flex items-center justify-between w-full md:w-fit min-w-0 sm:min-w-fit border border-border rounded-none md:rounded-full bg-white transition-all duration-300 p-2"
            initial={false}
            animate={{}}
            onMouseEnter={() => setIsHeaderMinimized(false)}
            onMouseLeave={applyScrollLogicOnce}
          >
            <a href="/" className={`font-bold font-antonio text-primary mr-4 sm:mr-8 ml-2 sm:ml-4 transition-all duration-300 text-2xl sm:text-3xl cursor-pointer`}>
              SKYNEX
            </a>
            <motion.div
              ref={linksRef}
              className="hidden md:flex overflow-hidden font-light"
              initial={{ width: isHeaderMinimized ? 0 : linksWidth }}
              animate={{
                width: isHeaderMinimized ? 0 : linksWidth,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                willChange: "width",
                pointerEvents: isHeaderMinimized ? "none" : "auto",
                clipPath: isHeaderMinimized ? "inset(0 50% 0 50%)" : "inset(0 0% 0 0%)",
              }}
              aria-hidden={isHeaderMinimized}
            >
              <div ref={linksContentRef} className="flex items-center gap-4 text-sm">
                <NavLinks />
              </div>
            </motion.div>
            {/* Mobile burger button */}
            <button
              type="button"
              className="inline-flex items-center justify-center md:hidden ml-auto mr-1 h-9 w-9 bg-white hover:bg-muted/50 transition"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(v => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            {/* Desktop CTA */}
            <Button
              variant="cta"
              size="sm"
              className={`${isHeaderMinimized ? "" : "ml-4 sm:ml-8"} hidden md:inline-flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-sm px-4`}
              onClick={scrollToContact}
            >
              Get Free Audit
            </Button>
          </motion.div>
        </div>
        {/* Mobile expanded panel */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop to detect outside clicks */}
              <motion.div
                key="mobile-backdrop"
                className="fixed inset-0 z-40 md:hidden bg-black/0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={() => setMobileOpen(false)}
                aria-hidden
              />
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="md:hidden mt-0 w-full border border-border bg-white rounded-none md:rounded-2xl shadow-medium overflow-hidden relative z-50"
              >
                <div className="px-4 py-3">
                  <div className="flex flex-col gap-3 text-base">
                    <NavLinks />
                    <Button
                      variant="cta"
                      className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-normal w-full"
                      onClick={() => {
                        setMobileOpen(false);
                        scrollToContact();
                      }}
                    >
                      Get Free Audit
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;
