import { motion } from "framer-motion";
import randomImage from "@/assets/about/about.avif";
import servicesImage from "@/assets/services_thumbnail.avif";

interface FlippingCarouselOverlayProps {
  motionTransform: any; // MotionValue<string> from useMotionTemplate
}

const FlippingCarouselOverlay: React.FC<FlippingCarouselOverlayProps> = ({ motionTransform }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="sticky top-1/2 z-30 hidden md:block w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex">
            <motion.div
              data-image="data-image"
              className="ml-auto"
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{
                transform: motionTransform,
                perspective: 1000,
                transformStyle: "preserve-3d",
                width: "340px",
                height: "476px",
              }}
            >
              {/* Front side */}
              <img
                src={randomImage}
                alt="Professional team collaboration"
                className="w-[340px] h-[476px] object-cover rounded-3xl transform rotate-2 shadow-strong absolute top-0 left-0"
                style={{ backfaceVisibility: "hidden" }}
              />
              {/* Back side */}
              <img
                src={servicesImage}
                alt="Team working together"
                className="w-[340px] h-[476px] object-cover rounded-3xl transform rotate-2 shadow-strong absolute top-0 left-0"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCarouselOverlay;
