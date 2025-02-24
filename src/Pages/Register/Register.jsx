import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import usePublic from "../../hooks/usePublic";
import Swal from "sweetalert2";

const Register = () => {
  //   const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = usePublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userInfo = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      role: data.role,
      pin: data.pin,
      nid: data.nid,
    };
    axiosPublic.post("/users", userInfo).then((res) => {
      if (res.data) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Already Exist!",
        });
      }
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Created Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/home");
      }
    });
  };
  return (
    <div>
      <div className="container mx-auto my-5">
        <div className="flex  h-[200] w-[400px] mx-auto bg-gray-200 rounded justify-center  py-5 px-3">
          <div>
            <h1 className="text-center text-xl mt-5 font-bold">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="" className="text-xl">
                  Name
                </label>
                <br />
                <input
                  className="mb-5 focus:outline-none px-2 py-2 w-full bg-white rounded"
                  placeholder="Enter Your Full Name"
                  {...register("name")}
                />
              </div>
              <div>
                <label htmlFor="" className="text-xl">
                  PIN
                </label>
                <br />
                <input
                  className="focus:outline-none px-2 py-2 w-full bg-white rounded"
                  placeholder="5 digit PIN"
                  {...register("pin", {
                    required: "PIN is required",
                    minLength: {
                      value: 5,
                      message: "PIN must be exactly 5 digits",
                    },
                    maxLength: {
                      value: 5,
                      message: "PIN must be exactly 5 digits",
                    },
                    pattern: {
                      value: /^[0-9]{5}$/,
                      message: "Only 5 numeric digits allowed",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="" className="text-xl">
                  Mobile Number
                </label>
                <br />
                <input
                  className="mb-5 focus:outline-none px-2 py-2 w-full bg-white rounded"
                  placeholder="Enter Your Phone"
                  {...register("phone")}
                />
              </div>
              <div>
                <label htmlFor="" className="text-xl">
                  Email
                </label>
                <br />
                <input
                  className="mb-5 focus:outline-none px-2 py-2 w-full bg-white rounded"
                  placeholder="Enter Your Email"
                  {...register("email")}
                />
              </div>
              <div>
                <label htmlFor="role" className="text-xl">
                  Account Type
                </label>
                <br />
                <select
                  className="mb-5 focus:outline-none px-2 py-2 w-full bg-white rounded"
                  {...register("role", { required: true })}
                >
                  <option value="">Account Type</option>
                  <option value="user">Agent</option>
                  <option value="agent">User</option>
                </select>
              </div>
              <div>
                <label htmlFor="" className="text-xl">
                  NID
                </label>
                <br />
                <input
                  className="mb-5 focus:outline-none px-2 py-2 w-full bg-white rounded"
                  placeholder="Enter Your NID"
                  {...register("nid", {
                    required: "NID is required",
                    minLength: {
                      value: 7,
                      message: "Nid must be 7 digits Above",
                    },
                    maxLength: {
                      value: 16,
                      message: "Nid must be 16 digits Long",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numeric digits allowed",
                    },
                  })}
                />
                {errors.nid && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <p>
                By creating and/or using your account, you agree to our{" "}
                <Link to="" className="text-blue-500">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link to="" className="text-blue-500">
                  Privacy Policy.
                </Link>
              </p>

              <input
                className="btn py-2 rounded cursor-pointer mt-5 bg-orange-400 hover:bg-orange-400 text-white w-full"
                type="submit"
                value="Register"
              />
            </form>
            <p className="mt-5">
              Already Have An Account?{" "}
              <Link className="text-orange-400" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
