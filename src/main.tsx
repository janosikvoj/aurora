import React from 'react';
import ReactDOM from 'react-dom/client';
import { initModuleHistory } from './lib/moduleHistory';

// Router
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

// Styles
import './index.css';
import { initToolHistory } from './lib/toolHistory';

initModuleHistory();
initToolHistory();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
