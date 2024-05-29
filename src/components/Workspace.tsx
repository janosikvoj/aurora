import PaletteSettings from './PaletteSettings';
import Button from './ui/custom/Button';
import { Plus, Trash } from 'lucide-react';

const Workspace = () => {
  return (
    <div>
      <PaletteSettings />
      <div>workspace</div>
      <div className="absolute bottom-0 w-full flex flex-row gap-2 h-16">
        <Button variant="secondary" className="h-full grow justify-center">
          <Trash size={20} strokeWidth={1.75} />
        </Button>
        <Button variant="secondary" className="h-full grow justify-center">
          <Plus size={20} strokeWidth={1.75} />
        </Button>
      </div>
    </div>
  );
};

export default Workspace;
