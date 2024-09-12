import { Link, useNavigate } from "react-router-dom";
import video from "../assets/video/signIn.mp4";
import { IoPersonCircle } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useSignUpMutation } from "@/redux/features/authApi";
import { toast } from "sonner";

type TInput = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  address: string;
};
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signUp, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();
  // console.log(error);
  const { register, handleSubmit } = useForm<TInput>();
  const onSubmit: SubmitHandler<TInput> = async (data) => {
    try {
      data.role = "user";
      const res = await signUp(data).unwrap();

      if (res.success) {
        toast.success(res.message);
        navigate("/signin");
      }
    } catch (err) {
      console.error("Error occurred:", err);
      toast.error(err?.data?.message || "Something went wrong");
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

        {/* Second Div: Same as Before */}
        <div className="flex items-center bg-[#0C172C] h-full w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg mx-auto"
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-primary">
                Create an account
              </h3>
            </div>

            <div>
              <label className="block mb-2 text-xs text-white">Full Name</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  required
                  {...register("name")}
                  className="w-full px-2 py-3 text-sm text-white bg-transparent border-b border-gray-300 outline-none focus:border-primary"
                  placeholder="Enter name"
                />
                <IoPersonCircle className="relative -left-6 text-[#A6A8AA] text-2xl" />
              </div>
            </div>
            <div className="mt-8">
              <label className="block mb-2 text-xs text-white">Email</label>
              <div className="relative flex items-center">
                <input
                  {...register("email")}
                  type="text"
                  required
                  className="w-full px-2 py-3 text-sm text-white bg-transparent border-b border-gray-300 outline-none focus:border-primary"
                  placeholder="Enter email"
                />
                <MdOutlineMailOutline className="relative -left-6 text-[#A6A8AA] text-2xl" />
              </div>
            </div>
            <div className="mt-8">
              <label className="block mb-2 text-xs text-white">Address</label>
              <div className="relative flex items-center">
                <input
                  {...register("address")}
                  type="text"
                  required
                  className="w-full px-2 py-3 text-sm text-white bg-transparent border-b border-gray-300 outline-none focus:border-primary"
                  placeholder="Enter address"
                />
                <MdPhoneIphone className="relative -left-6 text-[#A6A8AA] text-2xl" />
              </div>
            </div>
            <div className="mt-8">
              <label className="block mb-2 text-xs text-white">Phone</label>
              <div className="relative flex items-center">
                <input
                  {...register("phone")}
                  type="text"
                  required
                  className="w-full px-2 py-3 text-sm text-white bg-transparent border-b border-gray-300 outline-none focus:border-primary"
                  placeholder="Enter Phone"
                />
                <IoLocation className="relative -left-6 text-[#A6A8AA] text-2xl" />
              </div>
            </div>
            <div className="mt-8">
              <label className="block mb-2 text-xs text-white">Password</label>
              <div className="relative flex items-center">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-2 py-3 text-sm text-white bg-transparent border-b border-gray-300 outline-none focus:border-primary"
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
                className="px-6 py-3 text-sm font-semibold text-gray-100 rounded-md shadow-xl w-max bg-primary focus:outline-none"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2 ">
                    <p>Loading...</p>
                    <p
                      className="inline-block h-4 w-4 animate-spin rounded-full border-4 text-gray-100 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
                      role="status"
                    ></p>
                  </span>
                ) : (
                  "Register"
                )}
              </button>
              <p className="mt-8 text-sm text-white">
                Already have an account?{" "}
                <Link
                  to={"/signin"}
                  className="ml-1 font-semibold text-primary hover:underline"
                >
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
