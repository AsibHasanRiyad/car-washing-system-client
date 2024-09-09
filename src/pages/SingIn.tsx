/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import video from "../assets/video/signIn.mp4";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "@/redux/features/authApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "@/redux/features/authSlice";
import { verifyToken } from "@/utils/verifyToken";
type TInput = {
  email: string;
  password: string;
};
const SingIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   data fetch
  const [login, { isLoading, error }] = useLoginMutation();
  console.log(error);
  const { register, handleSubmit } = useForm<TInput>();
  const onSubmit: SubmitHandler<TInput> = async (data) => {
    const res = await login(data);
    console.log(res, "res");
    if (res?.data?.success) {
      toast.success(res?.data?.message);
      const user = verifyToken(res.data.data.token) as TUser;
      console.log(user);
      dispatch(
        setUser({
          user: user,
          token: res.data.data.token,
          userId: res.data.data.user._id,
          userName: res.data.data.user.name,
        })
      );
      navigate("/");
    } else {
      toast.error(res?.error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-white md:h-screen">
      <div className="grid items-center h-full md:grid-cols-2">
        <div className="relative h-full max-md:order-1">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center text-white bg-black bg-opacity-50">
            <h1 className="relative z-10 text-5xl font-semibold text-white md:text-6xl">
              <span className="text-primary">Clean</span>CarCo, Your Car
              Deserves the Best Shine
            </h1>
            <p className="relative z-10 mt-5 text-lg text-neutral-400">
              At CleanCarCo, we believe that a clean car is more than just a
              vehicle—it’s a reflection of your style, your personality, and
              your pride. Located in the heart of the community, we’re committed
              to delivering exceptional car wash services with a focus on
              quality, convenience, and eco-friendly practices.
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#0C172C] h-full w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg mx-auto"
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-primary">Sign In</h3>
            </div>

            <div className="mt-8">
              <label className="block mb-2 text-xs text-white">Email</label>
              <div className="relative flex items-center">
                <input
                  {...register("email")}
                  type="text"
                  required
                  className="w-full px-2 py-3 text-sm text-white bg-transparent border-b border-gray-300 outline-none focus:border-yellow-400"
                  placeholder="Enter email"
                />
                <MdOutlineMailOutline className="relative -left-6 text-[#A6A8AA] text-2xl" />
              </div>
            </div>
            <div className="mt-8">
              <label className="block mb-2 text-xs text-white">Password</label>
              <div className="relative flex items-center">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-2 py-3 text-sm text-white bg-transparent border-b border-gray-300 outline-none focus:border-yellow-400"
                  placeholder="Enter password"
                />
                {showPassword ? (
                  <IoMdEye
                    className={`relative -left-6 text-[#A6A8AA] text-2xl cursor-pointer ${
                      showPassword ? "text-yellow-400" : ""
                    }`}
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                ) : (
                  <IoMdEyeOff
                    className={`relative -left-6 text-[#A6A8AA] text-2xl cursor-pointer ${
                      showPassword ? "text-yellow-400" : ""
                    }`}
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                )}
              </div>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold text-gray-800 rounded-md shadow-xl bg-primary w-max focus:outline-none"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2 ">
                    <p>Loading...</p>
                    <p
                      className="inline-block h-4 w-4 animate-spin rounded-full border-4 text-gray-700 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
                      role="status"
                    ></p>
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
              <p className="mt-8 text-sm text-white">
                Doesn't have an account?{" "}
                <Link
                  to={"/signup"}
                  className="ml-1 font-semibold text-primary hover:underline"
                >
                  Sign Up here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
