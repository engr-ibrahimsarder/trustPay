/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

const AdminDashboard = () => {
  const [dbUser] = useUser();
  return (
    <div>
      <section className="w-72">
        <h1 className="text-center">
          hello, {dbUser?.name} - {dbUser.role}
        </h1>
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
          <li>
            <Link to="/dashboard/alltranjection" className="text-blue-400">
              All Tranjection
            </Link>
          </li>
          <li>
            <Link to="/dashboard/userquery" className="text-blue-400">
              User Query
            </Link>
          </li>
          <li>
            <Link to="/dashboard/withdraw" className="text-blue-400">
              Withdraw Approve
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
