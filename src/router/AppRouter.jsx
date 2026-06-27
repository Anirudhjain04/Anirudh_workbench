import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Work from '../pages/Work'
import Journal from '../pages/Journal'
import About from '../pages/About'
import ProjectDetail from '../pages/ProjectDetail'
import JournalDetail from "../pages/JournalDetail";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
           {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: '/work',
                    element: <Work />
                },
                {
                    path: '/journal',
                    element: <Journal />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/work/:slug',
                    element: <ProjectDetail />
                },
                {
                    path: '/journal/:slug',
                    element: <JournalDetail />
                }
            ]
           }
        ])

const AppRouter = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default AppRouter