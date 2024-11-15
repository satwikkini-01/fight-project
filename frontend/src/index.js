import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import AddFlight from './components/addFlight.jsx'
import GetFlight from './components/GetFlight.jsx'
import EditFlight from './components/EditFlight.jsx'
import HomePage from './components/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:"",
        element: <HomePage/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path: 'add-flight',
        element: <AddFlight/>
      },
      {
        path: 'edit-flight/:id',
        element: <EditFlight/>
      },
      {
        path: 'flight-list',
        element: <GetFlight/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
