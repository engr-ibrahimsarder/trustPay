import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";
import { jwtDecode } from "jwt-decode";

const useUser = () => {
  const token = localStorage.getItem("access-token");
  const user = jwtDecode(token);
  const axiosSecure = useAxiousSecure();
  const { data: userdb = [], refetch } = useQuery({
    queryKey: ["userdb"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users?email=${user?.email || user?.text}`
      );
      return res.data;
    },
  });
  return [userdb, refetch];
};

export default useUser;
