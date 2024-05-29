import React from 'react';
import ReactDOM from 'react-dom/client';
import { initModuleHistory } from './lib/moduleHistory';
import { initToolHistory } from './lib/toolHistory';

// Router
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

// Styles
import './index.css';

initModuleHistory();
initToolHistory();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
