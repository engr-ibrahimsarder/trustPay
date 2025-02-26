import { Table } from "flowbite-react";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const ApprovalRequest = () => {
  const [user, setUser] = useState();
  const axiosSecure = useAxiosSecure();
  axiosSecure.get("/all-users").then((res) => {
    const user = res?.data;
    const agent = user.filter((agentUser) => agentUser.role == "agent");
    setUser(agent);
  });

  return (
    <div>
      <h1>Approval Request</h1>
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
                  <h1 className="bg-purple-400 text-center my-3 text-white py-3">
                    Accept
                  </h1>
                </Table.Cell>
                <Table.Cell>
                  <button className="cursor-pointer">
                    <FaTrashAlt className="text-orange-400 text-xl ml-10"></FaTrashAlt>
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

export default ApprovalRequest;
