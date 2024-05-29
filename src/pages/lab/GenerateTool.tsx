import { setLastTool } from '@/lib/toolHistory';
import { Tool } from '@/types/ToolsTypes';
import { tools } from '@/data/tools';

const GenerateTool = () => {
  const tool: Tool = tools[0];
  setLastTool(tool.slug);
  return <div>GenerateTool</div>;
};

export default GenerateTool;
