import React from "react";
import bgNoise from "@/assets/bg-noise.gif";

type NoiseBgProps = {
  className?: string;
  style?: React.CSSProperties;
};

const NoiseBg: React.FC<NoiseBgProps> = ({ className = "", style }) => (
  <div 
        className={`fixed inset-0 opacity-10 bg-repeat z-0 ${className}`}
        style={{
          backgroundImage: `url(${bgNoise})`,
          backgroundSize: '200px 200px',
          filter: 'brightness(0.1)',
          ...style
        }}
      />
);

export default NoiseBg;
      