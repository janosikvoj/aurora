import React from 'react';
import ReactDOM from 'react-dom/client';
import { initModuleHistory } from './lib/moduleHistory';
import { initToolHistory } from './lib/toolHistory';
import { initPaletteHistory } from './lib/paletteHistory';

// Router
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

// Styles
import './index.css';

import { changeTheme } from './lib/theme';

changeTheme(8); //Changes theme after new page render
// changeTheme(Math.floor(Math.random() * 30));
// setTimeout(() => changeTheme(Math.floor(Math.random() * 30)), 500);
// setInterval(() => changeTheme(Math.floor(Math.random() * 30)), 3500);

initModuleHistory();
initToolHistory();
initPaletteHistory();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
