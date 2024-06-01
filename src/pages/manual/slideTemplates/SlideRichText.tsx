import Text from '@/components/Text';
import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient';

const SlideRichText = () => {
  return (
    <div className="absolute inset-0 p-16 flex flex-col">
      <div
        className="absolute inset-0 -top-4 -bottom-4"
        style={{
          maskImage:
            'linear-gradient(45deg, transparent 50%, rgba(1,1,1,0.33) 80%, black 100%)',
        }}
      >
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
        <div className="absolute inset-0 bg-theme-9 mix-blend-soft-light" />
      </div>
      <div className="grow">
        <Text style="h2" className="text-right">
          A Long List of Reasons
        </Text>
        <Text style="h2" className="mr-8 text-right">
          A Long List of Reasons
        </Text>
        <Text style="h2" className="mr-16 text-right">
          A Long List of Reasons
        </Text>
      </div>
      <div className="grid grid-cols-6 gap-8 items-start">
        <div className="col-span-2">
          <Text style="h4">
            Color theory has a wide range of applications in areas such as
          </Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Art</Text>
            </li>
            <li className="py-2">
              <Text style="p">Design</Text>
            </li>
            <li className="pt-2">
              <Text style="p">Marketing</Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">Many factors influence our color preferences</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Personal experiences</Text>
            </li>
            <li className="py-2">
              <Text style="p">Culture and symbolism</Text>
            </li>
            <li className="py-2">
              <Text style="p">Color psychology</Text>
            </li>
            <li className="pt-2">
              <Text style="p">Perception and physiology</Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">Understanding color theory allows us to</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">
                Create harmonious and aesthetic combinations.
              </Text>
            </li>
            <li className="py-2">
              <Text style="p">Influence perception and emotions.</Text>
            </li>
            <li className="pt-2">
              <Text style="p">
                Better understand the impact of color on our lives.
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideRichText;
