import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import { Table } from "flowbite-react";
import { MdBlock } from "react-icons/md";
const UserManagement = () => {
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState();
  const axiosSecure = useAxiosSecure();
  axiosSecure.get("/all-users").then((res) => {
    setUser(res?.data);
  });
  const handleVerify = (data) => {
    axiosSecure.patch(`/user/${data.phone}`, data).then((res) => {
      console.log(res);
    });
  };
  // console.log(status);
  const handleStatus = (data) => {
    const userInfo = {
      data,
      status,
    };
    console.log(userInfo);
    axiosSecure.patch(`/user-status/${data.phone}`, userInfo).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <h1 className="text-2xl">User Management</h1>
      <div className="overflow-x-auto mt-3">
        <Table>
          <Table.Head>
            <Table.HeadCell>#SL</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Approve</Table.HeadCell>
            <Table.HeadCell>Block</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y ">
            {user?.map((dbUser, index) => (
              <Table.Row
                key={dbUser._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800 py-6"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pl-6">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{dbUser?.name}</Table.Cell>

                <Table.Cell>{dbUser?.amount}</Table.Cell>
                <Table.Cell>{dbUser?.role}</Table.Cell>
                <Table.Cell>{dbUser?.amount}</Table.Cell>
                <Table.Cell>{dbUser?.status}</Table.Cell>
                <Table.Cell>
                  {dbUser?.role == "admin" ? (
                    <h1 className="bg-green-400 text-center py-3 rounded my-3 text-white">
                      Admin
                    </h1>
                  ) : dbUser.role == "user" ? (
                    <h1 className="bg-black text-center my-3 text-white py-3">
                      Accept
                    </h1>
                  ) : dbUser?.verify == true ? (
                    <h1 className="bg-purple-400 text-center my-3 text-white py-3">
                      Accept
                    </h1>
                  ) : (
                    <button
                      onClick={() => handleVerify(dbUser)}
                      className="bg-orange-400 px-6 py-3 rounded my-3 text-white cursor-pointer"
                    >
                      Verify
                    </button>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <button
                    onClick={() => handleStatus(dbUser)}
                    className="cursor-pointer"
                  >
                    <MdBlock
                      onClick={() => setStatus(!status)}
                      className="text-orange-400 text-xl ml-10"
                    ></MdBlock>
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default UserManagement;
