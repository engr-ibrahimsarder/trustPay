import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Home/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const hideNavbarAndFooter =
    location.pathname.includes("/") || location.pathname.includes("/login");
  const show = location.pathname.includes("/home");
  return (
    <div>
      {hideNavbarAndFooter || <Navbar></Navbar>}
      {show && <Navbar></Navbar>}
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
