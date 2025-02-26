import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";

const useAllTrajection = () => {
  const axiosSecure = useAxiousSecure();
  const { data: alltranjection = [], refetch } = useQuery({
    queryKey: ["alltranjection"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/adminalltranjection`);
      return res.data;
    },
  });
  return [alltranjection, refetch];
};

export default useAllTrajection;
