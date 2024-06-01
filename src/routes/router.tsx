import { RouteObject, createBrowserRouter } from 'react-router-dom';

import PageLayout from '../pages/PageLayout';

import AuroraPage from '../pages/AuroraPage-new';
import ErrorPage from '../pages/ErrorPage';
import ManualPage from '../pages/ManualPage';
import LabPage from '../pages/LabPage';
import AboutPage from '../pages/AboutPage';

import modules from '../data/modules';
import { tools } from '../data/tools';
import { Tool } from '../types/ToolsTypes';
import Slide from '../pages/manual/SlideLayout';
import ManualIndexHandler from '../pages/manual/ManualIndexHandler';
import ModuleHandler from '../pages/manual/ModuleHandler';
import ToolIndexHandler from '../pages/lab/ToolIndexHandler';

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <AuroraPage />,
      },
      {
        element: <PageLayout />,
        children: [
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
            children: [
              {
                index: true,
                element: <ToolIndexHandler />,
              },
              ...tools.map((tool: Tool): RouteObject => {
                return {
                  path: '/lab/' + tool.slug,
                  element: tool.element,
                  loader: () => {
                    return { tool };
                  },
                };
              }),
            ],
          },
          {
            path: '/about',
            element: <AboutPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
