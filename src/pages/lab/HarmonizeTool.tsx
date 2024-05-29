import { setLastTool } from '@/lib/toolHistory';
import { Tool } from '@/types/ToolsTypes';
import { tools } from '@/data/tools';

const HarmonizeTool = () => {
  const tool: Tool = tools[2];
  setLastTool(tool.slug);
  return <div>HarmonizeTool</div>;
};

export default HarmonizeTool;
