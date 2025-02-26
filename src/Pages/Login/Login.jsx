import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import usePublic from "../../hooks/usePublic";
import Swal from "sweetalert2";
const Login = () => {
  const axiosPublic = usePublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userInfo = {
      text: data?.text,
      pin: data?.pin,
    };
    axiosPublic.post(`/user-login`, userInfo).then((res) => {
      if (res.data.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res.data.message}`,
        });
      } else if (res.status == 200) {
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res?.data?.token) {
            reset();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "User Login Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            localStorage.setItem("access-token", res?.data?.token);
            navigate("/home");
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="pt-24 container mx-auto ">
        <div className="flex   w-[400px] mx-auto bg-gray-200 rounded justify-center  py-5 ">
          <div className="w-full mx-3">
            <h1 className="text-center text-xl mt-5 font-bold">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="" className="text-xl">
                  Email Or Mobile
                </label>
                <br />
                <input
                  className="mb-5 focus:outline-none px-2 py-2 w-full bg-white rounded"
                  placeholder="Enter Your Email"
                  {...register("text")}
                />
              </div>
              <div>
                <label htmlFor="" className="text-xl">
                  PIN
                </label>
                <br />
                <input
                  className="focus:outline-none px-2 py-2 w-full bg-white rounded"
                  placeholder="pin"
                  {...register("pin")}
                />
              </div>

              <Link className="flex justify-end mt-2">
                <h1 className="text-gray-500">Forget PIN</h1>
              </Link>
              <input
                className="btn py-2 rounded cursor-pointer mt-5 bg-orange-400 hover:bg-orange-400 text-white w-full"
                type="submit"
                value="LogIn"
              />
            </form>
            <p className="mt-5">
              New Here?{" "}
              <Link className="text-orange-400" to="/">
                Create a New Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
