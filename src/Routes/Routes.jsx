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
import ApprovalRequest from "../Pages/Dashboard/Admin/ApprovalRequest";
import CashOut from "../Pages/Dashboard/User/CashOut";
import AllTranjection from "../Pages/Dashboard/Admin/AllTranjection";
import Withdraw from "../Pages/Dashboard/Admin/Withdraw";
import UserQuery from "../Pages/Dashboard/Admin/UserQuery";

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
      {
        path: "cashout",
        element: <CashOut></CashOut>,
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
      {
        path: "approvalrequest",
        element: <ApprovalRequest></ApprovalRequest>,
      },
      {
        path: "alltranjection",
        element: <AllTranjection></AllTranjection>,
      },
      {
        path: "userquery",
        element: <UserQuery></UserQuery>,
      },
      {
        path: "withdraw",
        element: <Withdraw></Withdraw>,
      },
    ],
  },
]);
export default router;
