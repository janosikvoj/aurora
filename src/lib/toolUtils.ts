import { tools } from "@/data/tools";
import { Tool } from "@/types/ToolsTypes";

export function getToolBySlug(toolSlug: string, toolsArr: Tool[] = tools): Tool {
    let selectedTool = toolsArr[0];
    for (let i = 0; i < toolsArr.length; i++) {
        if (toolSlug === toolsArr[i].slug) selectedTool = toolsArr[i];
    }
    return selectedTool
}