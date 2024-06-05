import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';
import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient';

interface ShaderGradientBackgroundProps {
  fill?: boolean;
  invert?: boolean;
  className?: string;
  mask?: string;
}
const ShaderGradientElement = () => {
  return (
    <ShaderGradientCanvas fov={35} pixelDensity={1}>
      <ShaderGradient
        control="props"
        color1="#F0F0F0"
        color2="#D9D9D9"
        color3="#8D8D8D"
        brightness={0}
        grain="off"
        uAmplitude={0.5}
        positionY={0.5}
        uDensity={2}
        uSpeed={0.4}
        cDistance={3}
        cPolarAngle={90}
        cAzimuthAngle={180}
        enableTransition={false}
      />
    </ShaderGradientCanvas>
  );
};

const ShaderGradientBackground: React.FC<ShaderGradientBackgroundProps> = ({
  fill,
  className,
  mask,
  invert,
}) => {
  return (
    <motion.div
      className={cn(fill && 'absolute inset-0 pointer-events-none', className)}
      style={{
        maskImage: mask,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      {invert ? (
        <div className="h-full w-full invert">
          <ShaderGradientElement />
        </div>
      ) : (
        <ShaderGradientElement />
      )}
      <div className="absolute inset-0 bg-theme-9 mix-blend-soft-light" />
    </motion.div>
  );
};

export default ShaderGradientBackground;
