import { createBrowserRouter } from 'react-router-dom';

import PageLayout from '../pages/PageLayout';

import AuroraPage from '../pages/AuroraPage';
import ErrorPage from '../pages/ErrorPage';
import ManualPage from '../pages/ManualPage';
import LabPage from '../pages/LabPage';
import AboutPage from '../pages/AboutPage';

import modules from '../assets/modules.json';
import Slide from '../pages/manual/SlideLayout';
import ManualIndexHandler from '../pages/manual/ManualIndexHandler';
import ModuleHandler from '../pages/manual/ModuleHandler';

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
            element: <ManualIndexHandler />,
          },
          {
            path: '/manual/:moduleSlug',
            element: <ModuleHandler />,
            children: [
              {
                path: '/manual/:moduleSlug/:chapterId/:slideId',
                element: <Slide />,
              },
            ],
          },
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

export default router;
