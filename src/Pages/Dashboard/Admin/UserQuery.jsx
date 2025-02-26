import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import { Table } from "flowbite-react";
const UserQuery = () => {
  const [user, setUser] = useState();
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    axiosSecure.get(`/userquery?phone=${searchTerm}`).then((res) => {
      setUser(res?.data);
    });
  };
  // Handle Enter Key Press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div>
      <h1 className="text-2xl">User Information</h1>
      <div className="flex items-center w-full max-w-md border border-gray-300 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="01793967657"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-2 outline-none"
        />
        <button
          onClick={handleSearch}
          className="p-3 bg-orange-500 text-white hover:bg-orange-600 transition cursor-pointer"
        >
          <AiOutlineSearch className="w-5 h-5" />
        </button>
      </div>
      <div className="overflow-x-auto mt-3">
        <Table>
          <Table.Head>
            <Table.HeadCell>#SL</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Tranjection</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y ">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 py-6">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pl-6">
                {user?._id}
              </Table.Cell>
              <Table.Cell>{user?.name}</Table.Cell>

              <Table.Cell>{user?.amount}</Table.Cell>
              <Table.Cell>{user?.role}</Table.Cell>
              <Table.Cell>{user?.tranjectionId}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default UserQuery;
