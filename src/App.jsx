
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Main from './layouts/Main'
import Demo from './partials/Demo'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/demo",
          element: <Demo />
        },
      ]
    }
  ])

  return (
    <>
      
        <RouterProvider router={router} />
     



    </>
  )
}

export default App
