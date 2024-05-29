// * Base imports
import { Navigate } from 'react-router-dom';

// Libs import
import { getLastTool } from '../../lib/toolHistory';

const ToolIndexHandler = () => {
  // console.log('navigate: last visited tool');
  return <Navigate to={`/lab/${getLastTool()}`} />;
};

export default ToolIndexHandler;
