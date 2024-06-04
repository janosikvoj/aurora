import {
  Glasses,
  Music,
  Paintbrush,
  Pipette,
  Shuffle,
  SwatchBook,
} from 'lucide-react';
import { Tool } from '../types/ToolsTypes';
import GenerateTool from '../../src/pages/lab/GenerateTool';
import FinetuneTool from '../../src/pages/lab/FinetuneTool';
import HarmonizeTool from '../../src/pages/lab/HarmonizeTool';
import VisualizeTool from '../../src/pages/lab/VisualizeTool';
import BlendTool from '../../src/pages/lab/BlendTool';
import ClarifyTool from '../../src/pages/lab/ClarifyTool';

export const tools: Tool[] = [
  {
    name: 'Generate',
    slug: 'generate',
    id: 0,
    icon: Shuffle,
    element: <GenerateTool />,
  },
  {
    name: 'Fine-tune',
    slug: 'finetune',
    id: 1,
    icon: Pipette,
    element: <FinetuneTool />,
  },
  {
    name: 'Harmonize',
    slug: 'harmonize',
    id: 2,
    icon: Music,
    element: <HarmonizeTool />,
    disabled: true,
  },
  {
    name: 'Visualize',
    slug: 'visualize',
    id: 3,
    icon: Paintbrush,
    element: <VisualizeTool />,
    disabled: true,
  },
  {
    name: 'Blend',
    slug: 'blend',
    id: 4,
    icon: SwatchBook,
    element: <BlendTool />,
    disabled: true,
  },
  {
    name: 'Clarify',
    slug: 'clarify',
    id: 5,
    icon: Glasses,
    element: <ClarifyTool />,
    disabled: true,
  },
];
