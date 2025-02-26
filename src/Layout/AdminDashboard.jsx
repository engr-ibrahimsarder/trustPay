/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

const AdminDashboard = () => {
  const [dbUser] = useUser();
  return (
    <div>
      <section className="w-72">
        <h1 className="text-center">hello, {dbUser?.name}</h1>
        <ul className="text-center py-5">
          <li>
            <Link to="/dashboard/usermanagement" className="text-blue-400">
              User-Management
            </Link>
          </li>
          <li>
            <Link to="/dashboard/approvalrequest" className="text-blue-400">
              Approval Request
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
