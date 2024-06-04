import ShaderGradientBackground from '@/components/ShaderGradientBackground';
import Text from '@/components/Text';

const SlideRichText = () => {
  return (
    <div className="absolute inset-0 p-16 flex flex-col">
      <ShaderGradientBackground
        fill
        className="-top-4 -bottom-4"
        mask="linear-gradient(45deg, transparent 50%, rgba(1,1,1,0.33) 80%, black 100%)"
      />
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
