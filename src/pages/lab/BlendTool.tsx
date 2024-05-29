import { setLastTool } from '@/lib/toolHistory';
import { Tool } from '@/types/ToolsTypes';
import { tools } from '@/data/tools';

const BlendTool = () => {
  const tool: Tool = tools[4];
  setLastTool(tool.slug);
  return <div>BlendTool</div>;
};

export default BlendTool;
