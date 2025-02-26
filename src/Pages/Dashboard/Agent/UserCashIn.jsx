import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import useUser from "../../../hooks/useUser";
import Swal from "sweetalert2";

const UserCashIn = () => {
  const axiosSecure = useAxiosSecure();
  const [dbUser, refetch] = useUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const cashInfo = {
      email: dbUser.email,
      phone: data.phone,
      amount: data.amount,
      pin: data.pin,
    };
    console.log(cashInfo);
    axiosSecure.patch(`/agent-user/${data.phone}`, cashInfo).then((res) => {
      if (res.data.acknowledged) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${res?.data?.tranjectionId} CashIn Successful!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      reset;
    });
  };
  return (
    <div>
      <h1 className="text-2xl">User CashIn</h1>
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
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UserCashIn;
