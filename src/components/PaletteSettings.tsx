// base import
import React, { useContext } from 'react';

// Utils import
import { cn } from '@/lib/utils';

// Data import
import { defaultPalettes } from '@/data/defaultPalettes';

// Types import
import { Palette as PaletteType } from '@/types/PalettesTypes';

// Contexts import
import { PalettesDispatchContext } from '@/contexts/PalettesContext';

// Icons import
import {
  Ellipsis,
  Palette,
  Plus,
  Redo,
  TriangleAlert,
  Undo,
  Check,
} from 'lucide-react';

// Components import
import Button from './Button';
import Text from './Text';
import { Button as ShadButton } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type Checked = DropdownMenuCheckboxItemProps['checked'];

interface PaletteSettingsProps {
  editingPalette: PaletteType;
}

const PaletteSettings: React.FC<PaletteSettingsProps> = ({
  editingPalette,
}) => {
  const [showSwatchNames, setShowSwatchNames] = React.useState<Checked>(true);
  const [showThemeColor, setShowThemeColor] = React.useState<Checked>(false);

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(editingPalette.name);

  const PalettesDispatch = useContext(PalettesDispatchContext);

  return (
    <div className="w-full flex flex-row gap-2 justify-between items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <ShadButton
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className={cn(
              'flex flex-row items-center justify-start gap-3 text-theme-11 rounded-md font-medium',
              'px-3 py-1.5 w-[calc(100%-3.25rem)]',
              'border-none h-fit hover:text-theme-12'
            )}
          >
            {value ? (
              <>
                <Palette size={20} strokeWidth={1.75} className="min-w-5" />
                <Text style="code" className="truncate text-inherit">
                  {
                    defaultPalettes.find((palette) => palette.name === value)
                      ?.name
                  }
                </Text>
              </>
            ) : (
              <>
                <TriangleAlert
                  size={20}
                  strokeWidth={1.75}
                  className="min-w-5 text-theme-8"
                />
                <Text style="code" className="truncate text-theme-8">
                  Select palette
                </Text>
              </>
            )}
          </ShadButton>
        </PopoverTrigger>
        <PopoverContent
          className="w-[200px] p-0 border-none"
          side="bottom"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Search palette..." />
            <CommandList>
              <CommandGroup>
                {defaultPalettes.map((palette) => (
                  <CommandItem
                    key={palette.id}
                    value={palette.name}
                    onSelect={(currentValue) => {
                      if (currentValue !== value) {
                        setValue(currentValue === value ? '' : currentValue);
                        PalettesDispatch({
                          type: 'editingPaletteSwitch',
                          payload: { paletteID: palette.id },
                        });
                      }
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        'min-w-5 mr-2 h-4 w-4',
                        value === palette.name ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    <Text style="small" className="truncate">
                      {palette.name}
                    </Text>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button as="div" variant="secondary">
            <Ellipsis size={20} strokeWidth={1.75} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-theme-12 disabled:text-theme-8 border-none min-w-48">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Text style="small" className="ml-6">
                Rename
              </Text>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Text style="small" className="ml-6">
                Delete
              </Text>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Text style="small" className="ml-6">
                Duplicate
              </Text>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Text style="small" className="ml-6">
                  Export
                </Text>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="border-none">
                  <DropdownMenuItem>
                    <Text style="small">CSS</Text>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Text style="small">Code</Text>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Text style="small">Image</Text>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Text style="small">SVG</Text>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuCheckboxItem
              checked={showSwatchNames}
              onCheckedChange={setShowSwatchNames}
            >
              <Text style="small">Swatch names</Text>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showThemeColor}
              onCheckedChange={setShowThemeColor}
            >
              <Text style="small">Theme color</Text>
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Undo className="mr-2 h-4 w-4" />
              <Text style="small">Undo</Text>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Redo className="mr-2 h-4 w-4" />
              <Text style="small">Redo</Text>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <Text style="small">New palette</Text>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PaletteSettings;
