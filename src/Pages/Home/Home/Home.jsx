import useUser from "../../../hooks/useUser";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
const Home = () => {
  const [dbUser] = useUser();
  console.log(dbUser);

  return (
    <div className="container mx-auto pt-24">
      <section className="flex gap-5 justify-center">
        <div>
          <button className="p-16 bg-orange-50 text-5xl text-orange-400 rounded-full">
            <FaMoneyBillTrendUp />
          </button>
          <h1 className="text-center">Send Money</h1>
        </div>
        <div>
          <button className="p-16 bg-orange-50 text-5xl text-orange-400 rounded-full">
            <FaHandHoldingUsd />
          </button>
          <h1 className="text-center">Cash Out</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
