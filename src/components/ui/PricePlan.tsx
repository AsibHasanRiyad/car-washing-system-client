const PricePlan = () => {
  return (
    <div className=" bg-[#171717] py-10">
      <div className="container px-6 py-8 mx-auto">
        <div className="xl:items-center xl:-mx-8 xl:flex">
          <div className="flex flex-col items-center xl:items-start xl:mx-8">
            <h1 className="text-2xl font-medium text-white capitalize lg:text-3xl ">
              Our Pricing <span className=" text-primary">Plan</span>
            </h1>

            <div className="mt-4">
              <span className="inline-block w-40 h-1 bg-[#ff0] rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-[#ff0] rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-[#ff0] rounded-full"></span>
            </div>

            <p className="mt-4 font-medium text-neutral-400 dark:text-gray-300">
              You can get All Access by selecting your plan!
            </p>
          </div>

          <div className="flex-1 xl:mx-8">
            <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
              <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                <div className="p-6">
                  <h1 className="text-xl font-medium capitalize text-neutral-400 lg:text-2xl dark:text-white">
                    Essential Wash
                  </h1>

                  <p className="mt-4 text-neutral-400 dark:text-gray-300">
                    Basic car wash package for a quick and effective clean.
                  </p>

                  <h2 className="mt-4 text-2xl font-semibold text-neutral-400 sm:text-3xl dark:text-gray-300">
                    $15.00 <span className="text-base font-medium">/Wash</span>
                  </h2>

                  <p className="mt-1 text-neutral-400 dark:text-gray-300">
                    Pay per visit
                  </p>
                </div>

                <hr className="border-gray-200 dark:border-gray-700" />

                <div className="p-6">
                  <h1 className="text-lg font-medium capitalize text-neutral-400 lg:text-xl dark:text-white">
                    What’s included:
                  </h1>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#ff0]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-neutral-400 dark:text-gray-300">
                        Exterior wash
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#ff0]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-neutral-400 dark:text-gray-300">
                        Hand dry
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#ff0]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-neutral-400 dark:text-gray-300">
                        Hand dry
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-neutral-400 dark:text-gray-300">
                        Windows and mirrors clean
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-neutral-400 dark:text-gray-300">
                        Air freshener
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                <div className="p-6">
                  <h1 className="text-xl font-medium capitalize text-neutral-400 lg:text-2xl dark:text-white">
                    Premium Wash
                  </h1>

                  <p className="mt-4 text-neutral-400 dark:text-gray-300">
                    Comprehensive car wash and detailing package for a showroom
                    finish.
                  </p>

                  <h2 className="mt-4 text-2xl font-semibold text-neutral-400 sm:text-3xl dark:text-gray-300">
                    $50.00 <span className="text-base font-medium">/Wash</span>
                  </h2>

                  <p className="mt-1 text-neutral-400 dark:text-gray-300">
                    Pay per visit
                  </p>
                </div>

                <hr className="border-gray-200 dark:border-gray-700" />

                <div className="p-6">
                  <h1 className="text-lg font-medium capitalize text-neutral-400 lg:text-xl dark:text-white">
                    What’s included:
                  </h1>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#ff0]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-neutral-400 dark:text-gray-300">
                        Exterior wash and wax
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#ff0]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-neutral-400 dark:text-gray-300">
                        Full interior vacuum
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#ff0]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-neutral-400 dark:text-gray-300">
                        Premium tire shine
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#ff0]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-neutral-400 dark:text-gray-300">
                        Windows and mirrors clean
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#ff0]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-neutral-400 dark:text-gray-300">
                        Air freshener
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePlan;
