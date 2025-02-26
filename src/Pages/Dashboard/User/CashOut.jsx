import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import useUser from "../../../hooks/useUser";
import Swal from "sweetalert2";

const CashOut = () => {
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
    const cashoutInfo = {
      email: dbUser.email,
      phone: data.phone,
      amount,
      pin: data.pin,
    };
    console.log(cashoutInfo);
    axiosSecure
      .patch(`/user-cashout/${data.phone}`, cashoutInfo)
      .then((res) => {
        if (res?.data?.message) {
          Swal.fire("Agent Account Not Found!");
        }
        if (res?.data?.acknowledged) {
          reset;
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `CashOut Successful!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(res.data);
        refetch();
      });
  };
  return (
    <div>
      <h1 className="text-2xl">User CashOut</h1>
      <div>
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
            value="CashOut"
          />
        </form>
      </div>
    </div>
  );
};

export default CashOut;
