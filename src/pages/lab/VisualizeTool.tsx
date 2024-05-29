import { setLastTool } from '@/lib/toolHistory';
import { Tool } from '@/types/ToolsTypes';
import { tools } from '@/data/tools';

const VisualizeTool = () => {
  const tool: Tool = tools[3];
  setLastTool(tool.slug);
  return <div>VisualizeTool</div>;
};

export default VisualizeTool;
