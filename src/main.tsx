import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from 'react-router-dom';

import './index.css';

import PageLayout from './pages/PageLayout';

import AuroraPage from './pages/AuroraPage';
import ErrorPage from './pages/ErrorPage';
import ManualPage from './pages/ManualPage';
import LabPage from './pages/LabPage';
import AboutPage from './pages/AboutPage';

import modules from './assets/modules.json';

import { changeTheme } from './lib/theme';

setInterval(() => {
  const randomInt = Math.floor(Math.random() * 30);
  changeTheme(randomInt);
  console.log(randomInt);
}, 5000);

const manualChildren: RouteObject[] = modules.map((module) => {
  return {
    path: '/manual/' + module.slug,
    element: <span>{module.name}</span>,
  };
});

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <AuroraPage />,
      },
      {
        path: '/manual',
        element: <ManualPage />,
        loader: () => {
          return { modules };
        },
        children: [
          {
            index: true,
            element: <div>Hallo</div>,
          },
          ...manualChildren,
        ],
      },
      {
        path: '/lab',
        element: <LabPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
