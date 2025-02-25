/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

const UserDashboard = () => {
  const [dbUser] = useUser();
  return (
    <div>
      <section className="w-72">
        <h1 className="text-center">hello, {dbUser?.name}</h1>
        <ul className="text-center py-5">
          <li>
            <Link to="/dashboard/sendmoney" className="text-blue-400">
              Send Money
            </Link>
          </li>
          <li>
            <Link to="/dashboard/Cashout" className="text-blue-400">
              Cash-Out
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default UserDashboard;
