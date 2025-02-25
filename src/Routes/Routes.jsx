import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import SendMoney from "../Pages/Dashboard/User/SendMoney";
import UserManagement from "../Pages/Dashboard/Admin/UserManagement";
import UserCashIn from "../Pages/Dashboard/Agent/UserCashIn";
import AgentTranjection from "../Pages/Dashboard/Agent/AgentTranjection";
import AgentCashReq from "../Pages/Dashboard/Agent/AgentCashReq";
import AgentWithdraw from "../Pages/Dashboard/Agent/AgentWithdraw";

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
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "sendmoney",
        element: <SendMoney></SendMoney>,
      },
      // agent route ----------------

      {
        path: "cashIn",
        element: <UserCashIn></UserCashIn>,
      },
      {
        path: "tranjection",
        element: <AgentTranjection></AgentTranjection>,
      },
      {
        path: "cash-request",
        element: <AgentCashReq></AgentCashReq>,
      },
      {
        path: "withdraw-request",
        element: <AgentWithdraw></AgentWithdraw>,
      },
      // admin route-------------
      {
        path: "usermanagement",
        element: <UserManagement></UserManagement>,
      },
    ],
  },
]);
export default router;
