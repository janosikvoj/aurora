import ShaderGradientBackground from '@/components/ShaderGradientBackground';
import React from 'react';
import Text from '@/components/Text';

interface SlideMediaProps {
  imgUrl: string;
  caption?: React.ReactNode;
  bgGradient?: boolean;
}

const SlideMedia: React.FC<SlideMediaProps> = ({
  imgUrl,
  caption,
  bgGradient,
}) => {
  return (
    <div className="absolute -inset-8 bg-theme-6">
      {bgGradient && (
        <ShaderGradientBackground fill className="-top-4 -bottom-4" />
      )}
      <div
        className="absolute inset-8 bg-contain bg-no-repeat bg-center m-8"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute left-0 bottom-0 p-4 m-4 bg-theme-3 rounded">
          <Text style="p">{caption}</Text>
        </div>
      </div>
    </div>
  );
};

export default SlideMedia;
