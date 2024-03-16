import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import OrderItem from "./features/order/OrderItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/order/item",
    element: <OrderItem />,
  },
  {
    path: "/order/:orderId",
    element: <CreateOrder />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
