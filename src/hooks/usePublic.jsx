import axios from "axios";

const axiosPublic = axios.create({
  // https://trust-pay-server.vercel.app/
  // http://localhost:3000/
  baseURL: "https://trust-pay-server.vercel.app/",
});
const usePublic = () => {
  return axiosPublic;
};

export default usePublic;
