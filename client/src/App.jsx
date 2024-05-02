import { RouterProvider, createBrowserRouter } from "react-router-dom"

import CartPage from './pages/CartPage'
import AddProductForm from "./pages/AddProductForm";
import Error from "./components/Error";
import { formAction } from "./utils/actions";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <CartPage />
      },
      {
        path: 'addToCart',
        element: <AddProductForm />,
        action: formAction
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default App;
