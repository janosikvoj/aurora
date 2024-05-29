// Import
import { tools } from '../data/tools';

// Debug
const debugMode: boolean = false;

// Keys setup
const lastToolKey = 'lastTool';

// Initialization function
export function initToolHistory() {
  const ToolsSlugsArr = tools.map((tool) => {
    return tool.slug;
  });

  if (localStorage.getItem(lastToolKey)) {
    debugMode &&
      console.log(
        `localStorage: lastTool is defined as ${localStorage.getItem(
          lastToolKey
        )}`
      );
  } else {
    if (!localStorage.getItem(lastToolKey)) {
      localStorage.setItem(lastToolKey, tools[0].slug);
      debugMode &&
        console.log(
          `localStorage: undefined lastTool and was automatically set to ${tools[0].slug}`
        );
    }
    if (!ToolsSlugsArr.includes(localStorage.getItem(lastToolKey) || '')) {
      localStorage.setItem(lastToolKey, tools[0].slug);
      debugMode &&
        console.log(
          `localStorage: lastTool did not match any available Tools and was automatically set to ${tools[0].slug}`
        );
    }
  }
}

export function getLastTool() {
  initToolHistory();
  return localStorage.getItem(lastToolKey);
}

export function setLastTool(tool: string) {
  initToolHistory();
  debugMode && console.log(`localStorage: lastToolKey was set to ${tool}`);
  localStorage.setItem(lastToolKey, tool);
}
