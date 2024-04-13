import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import './index.css'

import AuroraPage from './pages/AuroraPage'
import ErrorPage from './pages/ErrorPage'
import ManualPage from './pages/ManualPage'
import LabPage from './pages/LabPage'
import AboutPage from './pages/AboutPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuroraPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/manual",
    element: <ManualPage />,
  },
  {
    path: "/lab",
    element: <LabPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)