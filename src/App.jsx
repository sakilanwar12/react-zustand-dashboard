
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Main from './layouts/Main'
import useStore from './state/store'
import Analytics from './partials/Dashboard/Analytics';
import Ecommerce from './partials/Dashboard/Ecommerce';


function App() {
  const { theme, skin_bordered, grayscale } = useStore();
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
          path: "dashboard/analytics-dashboard",
          element: <Analytics />
        },
        {
          path: "dashboard/ecommerce-dashboard",
          element: <Ecommerce />
        },
      ]
    }
  ])



  return (
    <>
      <div className={` ${theme} ${skin_bordered} ${grayscale ? "grayscale" : ""} `}>
        <RouterProvider router={router} />
      </div>

    </>
  )
}

export default App
