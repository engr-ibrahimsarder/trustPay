import { useState } from "react";
import { FaBars, FaTimes, FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import { Dropdown } from "flowbite-react";
import { PiSignOutBold } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import useUser from "../../../../hooks/useUser";
import { IoIosNotifications } from "react-icons/io";
import useTrajection from "../../../../hooks/useTranjection";
import useAllTrajection from "../../../../hooks/useAllTrajection";
const Navbar = () => {
  const [dbUser] = useUser();
  const [tranjection, refetch] = useTrajection();
  const [alltranjection] = useAllTrajection();
  const [balance, setBalance] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("access-token");
    navigate("/login");
  };
  const navMenu = (
    <>
      <nav>
        <ul className="flex justify-center items-center md:flex-row flex-col  uppercase text-black gap-5 ">
          <li>
            <Link to="/dashboard/tranjection">
              <IoIosNotifications className="text-4xl text-gray-500 " />
              <p className="absolute top-8 -ml-3 bg-rose-400 px-2 py-1 text-white rounded-full">
                {tranjection.length || alltranjection.length}
              </p>
            </Link>
          </li>
          <li>
            <Dropdown
              label={
                <FaRegUserCircle className="text-gray-600 text-4xl cursor-pointer"></FaRegUserCircle>
              }
              arrowIcon={false}
              inline
            >
              <Dropdown.Item>
                <ul className="">
                  <Dropdown.Divider />
                  <li className="flex gap-4 my-2 items-center">
                    <MdDashboard className="text-xl text-gray-400"></MdDashboard>

                    <Link
                      to="/dashboard"
                      className="hover:text-orange-500 hover:underline"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <Dropdown.Divider />

                  <li
                    onClick={handleLogOut}
                    className="flex gap-4 my-2 items-center"
                  >
                    <PiSignOutBold className="text-xl text-gray-400"></PiSignOutBold>

                    <Link className="hover:text-orange-500 hover:underline">
                      Sign out
                    </Link>
                  </li>
                </ul>
              </Dropdown.Item>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </>
  );
  return (
    <div>
      <nav className="bg-rose-200 shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/home">
            <img className="h-14" src={logo} alt="" />
          </Link>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={() => setBalance(!balance)}
              className="p-3 bg-orange-500 text-white hover:bg-orange-600 transition cursor-pointer rounded"
            >
              Balance Check
            </button>
            {balance ? (
              <h1 className="bg-gray-200 px-5 py-3 rounded ">
                {dbUser.amount}
              </h1>
            ) : (
              <h1 className="bg-gray-400 px-7 py-6 rounded "></h1>
            )}
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">{navMenu}</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-200 py-2 shadow-md">{navMenu}</div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
