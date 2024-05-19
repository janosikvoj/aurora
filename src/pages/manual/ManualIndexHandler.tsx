// * Base imports
import { Navigate } from 'react-router-dom';

// Libs import
import { getLastModule } from '../../lib/moduleHistory';

const ManualIndexHandler = () => {
  // console.log('navigate: last visited module');
  return <Navigate to={`/manual/${getLastModule()}`} />;
};

export default ManualIndexHandler;
