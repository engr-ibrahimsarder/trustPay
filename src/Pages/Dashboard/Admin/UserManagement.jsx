import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import { Table } from "flowbite-react";
const UserManagement = () => {
  const [user, setUser] = useState();
  const axiosSecure = useAxiosSecure();
  axiosSecure.get("/all-users").then((res) => {
    setUser(res?.data);
  });
  const handleVerify = (data) => {
    console.log(data);
    axiosSecure.patch(`/user/${data.phone}`, data).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <h1>User Management</h1>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>#SL</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>

            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Approve</Table.HeadCell>
            <Table.HeadCell>Remove</Table.HeadCell>
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
                <Table.Cell>
                  {dbUser.role == "admin" ? (
                    <h1 className="bg-green-400 text-center py-3 rounded my-3 text-white">
                      Admin
                    </h1>
                  ) : dbUser.status == true ? (
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
                <Table.Cell>{dbUser?.role}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default UserManagement;
