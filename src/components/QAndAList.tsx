import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export type QAndAItem = {
  id: string | number;
  title: string;
  description: string;
  image?: string;
};

type Props = {
  qAndAnswers: QAndAItem[];
  showImageOnHover?: boolean;
  className?: string;
};

const QAndAList: React.FC<Props> = ({ qAndAnswers, showImageOnHover = false, className }) => {
  const [expanded, setExpanded] = useState<Set<string | number>>(new Set());
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const lastMouse = useRef<{ x: number; y: number } | null>(null);
  const headersRef = useRef<Record<string | number, HTMLHeadingElement | null>>({});

  const toggle = (id: string | number) =>
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });

  // Global mouse tracking + scroll/resize handling so the hover image appears when
  // scrolling a question under a stationary cursor (no mouse movement required)
  useEffect(() => {
    if (!showImageOnHover) return;

    const onMouseMove = (e: MouseEvent) => {
      lastMouse.current = { x: e.clientX, y: e.clientY };
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const updateFromScroll = () => {
      if (!lastMouse.current) return;
      const { x, y } = lastMouse.current;
      // keep image near cursor even without movement
      setMousePos({ x, y });

      // Prefer elementFromPoint for precise hit testing at the cursor
      let found: string | number | null = null;
      const elAtPoint = document.elementFromPoint(x, y) as HTMLElement | null;
      if (elAtPoint) {
        const header = elAtPoint.closest('h3[data-qid]') as HTMLElement | null;
        if (header && header.dataset.qid) {
          found = (isNaN(Number(header.dataset.qid)) ? header.dataset.qid : Number(header.dataset.qid)) as string | number;
        }
      }
      // Fallback: iterate cached headers' rects
      if (found === null) {
        for (const [id, el] of Object.entries(headersRef.current)) {
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
            found = id as unknown as string | number;
            break;
          }
        }
      }
      setHoveredId(found);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('resize', updateFromScroll);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', updateFromScroll as EventListener);
      window.removeEventListener('resize', updateFromScroll as EventListener);
    };
  }, [showImageOnHover, qAndAnswers.length]);

  // If feature is disabled, clear any hover state and cached mouse
  useEffect(() => {
    if (!showImageOnHover) {
      setHoveredId(null);
      lastMouse.current = null;
      // move off-screen to avoid any visual blip from stale coordinates
      setMousePos({ x: -99999, y: -99999 });
    }
  }, [showImageOnHover]);

  return (
    <div
      className={`relative ${className ?? ''}`}
      onMouseMove={showImageOnHover ? ((e) => {
        lastMouse.current = { x: e.clientX, y: e.clientY };
        setMousePos({ x: e.clientX, y: e.clientY });
      }) : undefined}
      onMouseEnter={showImageOnHover ? ((e) => {
        lastMouse.current = { x: e.clientX, y: e.clientY };
        setMousePos({ x: e.clientX, y: e.clientY });
      }) : undefined}
    >
      {qAndAnswers.map((item, index) => {
        const isOpen = expanded.has(item.id);
        return (
          <div
            key={item.id}
            className={`group transition-colors duration-200`}
          >
            <h3
              className={`text-2xl md:text-3xl font-antonio transition-smooth flex items-center py-4 md:py-5 transition-colors duration-200 cursor-pointer ${isOpen ? 'text-primary' : 'hover:text-primary'} ${!showImageOnHover ? 'focus:outline-none focus:ring-0 outline-none ring-0' : ''}`}
              onMouseEnter={showImageOnHover ? ((e) => {
                setHoveredId(item.id);
                lastMouse.current = { x: e.clientX, y: e.clientY };
                setMousePos({ x: e.clientX, y: e.clientY });
              }) : undefined}
              onMouseLeave={showImageOnHover ? (() => {
                setHoveredId(null);
              }) : undefined}
              onClick={() => toggle(item.id)}
              ref={showImageOnHover ? ((el) => {
                headersRef.current[item.id] = el;
              }) : undefined}
              data-qid={showImageOnHover ? `${item.id}` : undefined}
            >
              <span className="mr-2">{index + 1}.</span>
              <span className="flex-1">{item.title}</span>
              {isOpen ? (
                <ChevronUp className="ml-3 h-5 w-5" />
              ) : (
                <ChevronDown className="ml-3 h-5 w-5" />
              )}
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key={`${item.id}-content`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden cursor-text"
                >
                  <p className="leading-relaxed mb-4 mt-4">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Separator under the whole Q&A item */}
            <div
              className={`h-px transition-colors duration-300 ${
                isOpen ? 'bg-primary mt-4' : 'bg-foreground/20 group-hover:bg-primary'
              }`}
            />
          </div>
        );
      })}

      {showImageOnHover && (
        <AnimatePresence initial={false}>
          {hoveredId && lastMouse.current && (
            <motion.div
              key={`hover-img-${hoveredId}`}
              className="fixed pointer-events-none z-50 w-56 h-40 rounded-lg overflow-hidden shadow-strong outline-none ring-0 border-0"
              initial={{ opacity: 0, scale: 0.5, rotateY: -90, rotate: 8, x: -50 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, rotate: 8, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 0, rotate: 8, x: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
                left: mousePos.x + 20,
                top: mousePos.y - 100,
              }}
            >
              {(() => {
                const hovered = qAndAnswers.find(q => q.id === hoveredId);
                if (!hovered?.image) return null;
                return (
                  <img src={hovered.image} alt="" className="w-full h-full object-cover" />
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

// Scroll/resize handling to show hover image when scrolling under stationary cursor
// Attach effect inside component (after return in source order but before export)
// Note: keeping inside same file scope, leveraging component state


export default QAndAList;
