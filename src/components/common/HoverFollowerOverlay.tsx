import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export type HoverFollowerOverlayProps = {
  hover: boolean;
  pos: { x: number; y: number };
  offset?: { x?: number; y?: number };
  render?: () => React.ReactNode; // optional custom renderer
};

const HoverFollowerOverlay: React.FC<HoverFollowerOverlayProps> = ({ hover, pos, offset, render }) => {
  const dx = offset?.x ?? 10;
  const dy = offset?.y ?? 0;
  return (
    <AnimatePresence>
      {hover && (
        <motion.div
          key="hover-circle"
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ left: pos.x + dx, top: pos.y + dy }}
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.1 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          {render ? (
            render()
          ) : (
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HoverFollowerOverlay;
