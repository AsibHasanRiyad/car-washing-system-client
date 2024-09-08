import { Link } from "react-router-dom";
import video from "../assets/video/signIn.mp4";
import { IoMdEye } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
const SingIn = () => {
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
              <span className="text-[#ff0]">Clean</span>CarCo, Your Car Deserves
              the Best Shine
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
          <form className="w-full max-w-lg mx-auto">
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-primary">Sign In</h3>
            </div>

            <div className="mt-8">
              <label className="block mb-2 text-xs text-white">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
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
                  name="password"
                  type="password"
                  required
                  className="w-full px-2 py-3 text-sm text-white bg-transparent border-b border-gray-300 outline-none focus:border-yellow-400"
                  placeholder="Enter password"
                />
                <IoMdEye className="relative -left-6 text-[#A6A8AA] text-2xl" />
              </div>
            </div>

            <div className="flex items-center mt-8">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 rounded shrink-0"
              />
              <label className="block ml-3 text-sm text-white">
                I accept the{" "}
                <p className="ml-1 font-semibold text-yellow-500 hover:underline">
                  Terms and Conditions
                </p>
              </label>
            </div>

            <div className="mt-12">
              <button
                type="button"
                className="px-6 py-3 text-sm font-semibold text-gray-800 rounded-md shadow-xl bg-primary w-max focus:outline-none"
              >
                Sign In
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
