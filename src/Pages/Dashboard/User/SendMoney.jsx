import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import useUser from "../../../hooks/useUser";
import Swal from "sweetalert2";

const SendMoney = () => {
  const axiosSecure = useAxiosSecure();
  const [dbUser, refetch] = useUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const amount = Number(data.amount);
    if (amount < 50) {
      Swal.fire("Send Money Minimum 50 Tk!");
      return;
    }
    const sendmoneyInfo = {
      email: dbUser.email,
      phone: data.phone,
      amount: amount,
      pin: data.pin,
    };
    console.log(sendmoneyInfo);
    axiosSecure
      .patch(`/user-sendmoney/${data.phone}`, sendmoneyInfo)
      .then((res) => {
        if (res?.data?.message) {
          Swal.fire("User Not Found!");
        }
        refetch();
        console.log(res);
        reset;
      });
  };
  return (
    <div>
      <h1>Send Money</h1>
      <form className="w-96 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className="focus:outline-none px-2 py-2 w-full bg-white rounded"
            placeholder="01793967657"
            {...register("phone")}
          />
        </div>
        <div>
          <input
            className="focus:outline-none px-2 py-2 w-full bg-white rounded mt-3"
            placeholder="amount"
            {...register("amount")}
          />
        </div>
        <div>
          <input
            className="focus:outline-none px-2 py-2 w-full bg-white rounded mt-3"
            placeholder="PIN"
            {...register("pin")}
          />
        </div>
        <input
          className="btn py-2 rounded cursor-pointer mt-5 bg-orange-400 hover:bg-orange-400 text-white w-full"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default SendMoney;
