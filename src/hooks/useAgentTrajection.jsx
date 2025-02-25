import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";
import useUser from "./useUser";

const useAgentTrajection = () => {
  const axiosSecure = useAxiousSecure();
  const [dbUser] = useUser();
  const { data: tranjection = [], refetch } = useQuery({
    queryKey: ["tranjection"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agent-user?email=${dbUser?.email}`);
      return res.data;
    },
  });
  return [tranjection, refetch];
};

export default useAgentTrajection;
