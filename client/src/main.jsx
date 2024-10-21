import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import App from './App.jsx'
import './index.css'

import Error from './pages/error.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Menu from './pages/menu.jsx'
import Profile from './pages/profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:  '/about',
        element: <About />
      },
      {
        path:  '/menu',
        element: <Menu />
      },
      {
        path:  '/profile',
        element: <Profile />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
