import ArrowStarVector from '@/components/ArrowStarVector';
import Text from '@/components/Text';

const SlideSectionTitle = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 -top-4 -bottom-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle,var(--theme-1)25%,rgba(0,0,0,0)100%)]"></div>
        <ArrowStarVector />
      </div>
      <div className="absolute z-10 inset-16 flex flex-row gap-16 items-center justify-center">
        <Text style="label">Chapter</Text>
        <Text style="h1" className="break-word flex min-w-0 text-center">
          Introduction
          <br />
          to the world of colors
        </Text>
        <Text style="label">Chapter</Text>
      </div>
    </div>
  );
};

export default SlideSectionTitle;
