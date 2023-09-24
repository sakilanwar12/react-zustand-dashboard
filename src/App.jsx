
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Main from './layouts/Main'
import Demo from './partials/Demo'
import useStore from './state/store'

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
          path: "/demo",
          element: <Demo />
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
