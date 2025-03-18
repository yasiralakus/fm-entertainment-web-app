import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Movies from './Pages/Movies.jsx'
import TvSeries from './Pages/TvSeries.jsx'
import Bookmark from './Pages/Bookmark.jsx'

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/movies',
                element: <Movies />
            },
            {
                path: '/tv-series',
                element: <TvSeries />
            },
            {
                path: '/bookmarks',
                element: <Bookmark />
            },
        ]
    },
    {
        path: '/login',
        element: 'login'
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
