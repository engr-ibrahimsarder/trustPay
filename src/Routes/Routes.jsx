import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
