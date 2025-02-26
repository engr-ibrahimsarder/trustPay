import { Table } from "flowbite-react";
import useTrajection from "../../../hooks/useTranjection";
const AgentTranjection = () => {
  const [tranjection] = useTrajection();
  return (
    <div>
      <h1 className="text-2xl">Agent Tranjection</h1>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>#SL</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Tranjection</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y ">
            {tranjection?.map((tran, index) => (
              <Table.Row
                key={tran._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800 py-6"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pl-6">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{tran?.name}</Table.Cell>

                <Table.Cell>{tran?.amount}</Table.Cell>
                <Table.Cell>{tran?.role}</Table.Cell>
                <Table.Cell>{tran?.tranjectionId}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AgentTranjection;
