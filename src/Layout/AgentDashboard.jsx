/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

const AgentDashboard = () => {
  const [dbUser] = useUser();
  return (
    <div>
      <section className="w-72">
        <h1 className="text-center">hello, {dbUser?.name}</h1>
        <ul className="text-center py-5">
          <li>
            <Link to="/dashboard/cashIn" className="text-blue-400">
              User-Cash-in
            </Link>
          </li>
          <li>
            <Link to="/dashboard/tranjection" className="text-blue-400">
              Tranjection
            </Link>
          </li>
          <li>
            <Link to="/dashboard/cash-request" className="text-blue-400">
              Cash Request
            </Link>
          </li>
          <li>
            <Link to="/dashboard/withdraw-request" className="text-blue-400">
              Withdraw
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AgentDashboard;
