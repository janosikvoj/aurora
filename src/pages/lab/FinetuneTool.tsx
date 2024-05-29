import { setLastTool } from '@/lib/toolHistory';
import { Tool } from '@/types/ToolsTypes';
import { tools } from '@/data/tools';

const FinetuneTool = () => {
  const tool: Tool = tools[1];
  setLastTool(tool.slug);
  return <div>FinetuneTool</div>;
};

export default FinetuneTool;
