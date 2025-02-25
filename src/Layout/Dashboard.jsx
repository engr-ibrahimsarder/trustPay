import { Link, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";
import UserDashboard from "./UserDashboard";
import Navbar from "../Pages/Home/Shared/Navbar/Navbar";
import AdminDashboard from "./AdminDashboard";
import AgentDashboard from "./AgentDashboard";

const Dashboard = () => {
  const [dbUser] = useUser();
  console.log(dbUser);
  return (
    <div className="bg-gray-200 h-screen">
      <Navbar></Navbar>
      <div className="pt-32 flex gap-3 container mx-auto">
        <section className="w-72">
          {dbUser.role == "admin" ? (
            <AdminDashboard></AdminDashboard>
          ) : dbUser.role == "agent" ? (
            <AgentDashboard></AgentDashboard>
          ) : (
            <UserDashboard></UserDashboard>
          )}
        </section>
        <section className="w-full">
          <Outlet></Outlet>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
