import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navigation from './components/Navigation'
import Contact from './components/Contact'
import Bout from './Bout'
import './tailwind.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
  [
    {
      element: <Navigation />,
      children: [
        {
          path: "/",
          element: <App />
        },
        {
          path: "/Contact",
          element: <Contact />
        },
        {
          path: "/Bout",
          element: <Bout />
        },
      ],
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
