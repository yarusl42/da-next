import { motion } from "framer-motion";
import slideImg2 from "@/assets/about/tech_stack_thumbnail.jpg";
import slideImg3 from "@/assets/about/whyus.jpg";

interface GlidingCarouselOverlayProps {
  activeSlide: number;
}

const GlidingCarouselOverlay: React.FC<GlidingCarouselOverlayProps> = ({ activeSlide }) => {
  return (
    <div className="absolute inset-x-0 top-[100px] bottom-0 pointer-events-none">
      <div className="sticky top-[150px] z-30 hidden md:block w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex">
            {/* Frame */}
            <div
              className="ml-auto"
              style={{
                width: "340px",
                height: "476px",
                perspective: 1000,
                transformStyle: "preserve-3d",
                overflow: "hidden",
                borderRadius: "1.5rem", // to match rounded-3xl
                boxShadow:
                  "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
              }}
            >
              {/* Slide stack (2 images: Tech, Why) */}
              <motion.div
                animate={{ y: -476 * activeSlide }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                <img
                  src={slideImg2.src}
                  alt="Showcase Tech"
                  className="w-[340px] h-[476px] object-cover rounded-3xl"
                />
                <img
                  src={slideImg3.src}
                  alt="Showcase Why"
                  className="w-[340px] h-[476px] object-cover rounded-3xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlidingCarouselOverlay;
