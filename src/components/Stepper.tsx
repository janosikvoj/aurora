import Text from './ui/Text';

const Stepper = () => {
  return (
    <div className="relative col-start-1 col-end-3 my-4">
      <div className="absolute w-[calc(100%-1rem)] ml-4 h-full border-l border-y border-theme-6 rounded-l-2xl" />
      <div className="absolute w-[calc(100%-1rem)] ml-[calc(1rem-1px)] h-[2rem] max-h-[calc(100%-2rem)] border-l-2 border-t-2 border-theme-6 rounded-tl-2xl" />
      <div className="absolute -translate-y-1/2	right-0 bg-theme-2 pl-4 rounded-md">
        <Text style="label">Progress</Text>
      </div>
      <div className="relative h-full py-4 text-left">
        <button className="min-h-8 rounded-md flex flex-row hover:bg-theme-4">
          <div className="w-8 min-w-8 h-8 flex items-center justify-center">
            <div className="bg-theme-11 h-2 w-2 rounded-full" />
          </div>
          <div className="mx-2 my-1">
            <Text style="muted" className="text-theme-11">
              Barvy kolem nás
            </Text>
          </div>
        </button>

        <button className="min-h-8 rounded-md flex flex-row text-left hover:bg-theme-4">
          <div className="w-8 min-w-8 h-8 flex items-center justify-center">
            <div className="bg-theme-11 h-2 w-2 rounded-full" />
          </div>
          <div className="mx-2 my-1">
            <Text style="small" className="text-theme-11">
              Věda o barvě
            </Text>
            <br />
            <Text style="code" className="text-theme-8">
              3 pages
            </Text>
          </div>
        </button>

        <div className="bg-red-3">
          <Text style="muted" className="text-theme-11">
            Barvy kolem nás
          </Text>
        </div>
        <div className="bg-red-3">
          <Text style="muted" className="text-theme-11">
            Barvy kolem nás
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
