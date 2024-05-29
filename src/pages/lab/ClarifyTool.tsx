import { setLastTool } from '@/lib/toolHistory';
import { Tool } from '@/types/ToolsTypes';
import { tools } from '@/data/tools';

const ClarifyTool = () => {
  const tool: Tool = tools[5];
  setLastTool(tool.slug);
  return <div>ClarifyTool</div>;
};

export default ClarifyTool;
