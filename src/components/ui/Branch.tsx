const Branch = () => {
  return (
    <section className="py-5 lg:py-10 bg-secondary">
      <div className="container px-6 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl ">
          Our <span className=" text-primary">Branches</span>
        </h1>
        <div className="flex justify-center mt-4">
          <span className="inline-block w-40 h-1 rounded-full bg-primary"></span>
          <span className="inline-block w-3 h-1 mx-1 rounded-full bg-primary"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-primary"></span>
        </div>

        <p className="max-w-2xl mx-auto my-6 text-center text-neutral-400 dark:text-gray-300">
          We have multiple branches across the city to serve you better. Visit
          us at any of our locations below or get in touch with us through the
          provided contact numbers.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group :border-gray-700 ">
            <div className="mt-4">
              <h1 className="text-xl font-semibold capitalize text-primary md:text-2xl dark:text-white group-hover:text-white">
                Downtown Branch
              </h1>
              <p className="mt-2 text-neutral-400 dark:text-gray-300 group-hover:text-gray-300">
                123 Main Street, Downtown City, NY 10001
              </p>
              <p className="mt-2 text-neutral-400 dark:text-gray-300 group-hover:text-gray-300">
                Contact: (123) 456-7890
              </p>
            </div>

            <p className="mt-4 text-neutral-400 dark:text-gray-300 group-hover:text-gray-300">
              Our downtown branch offers a wide variety of services and is
              located at the heart of the city, easily accessible by all forms
              of transportation.
            </p>
          </div>

          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group :border-gray-700 dark:hover:border-transparent">
            <div className="mt-4">
              <h1 className="text-xl font-semibold capitalize text-primary md:text-2xl dark:text-white group-hover:text-white">
                Uptown Branch
              </h1>
              <p className="mt-2 text-neutral-400 dark:text-gray-300 group-hover:text-gray-300">
                456 North Avenue, Uptown City, NY 10002
              </p>
              <p className="mt-2 text-neutral-400 dark:text-gray-300 group-hover:text-gray-300">
                Contact: (987) 654-3210
              </p>
            </div>

            <p className="mt-4 text-neutral-400 dark:text-gray-300 group-hover:text-gray-300">
              Located in the vibrant Uptown area, our branch provides premium
              services and customer support for all your needs.
            </p>
          </div>

          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group :border-gray-700 dark:hover:border-transparent">
            <div className="mt-4">
              <h1 className="text-xl font-semibold capitalize text-primary md:text-2xl dark:text-white group-hover:text-white">
                Eastside Branch
              </h1>
              <p className="mt-2 text-neutral-400 dark:text-gray-300 group-hover:text-gray-300">
                789 East Street, Eastside City, NY 10003
              </p>
              <p className="mt-2 text-neutral-400 dark:text-gray-300 group-hover:text-gray-300">
                Contact: (555) 123-4567
              </p>
            </div>

            <p className="mt-4 text-neutral-400 dark:text-gray-300 group-hover:text-gray-300">
              Our Eastside branch is known for quick and efficient service.
              Located near key landmarks for easy access.
            </p>
          </div>

          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group :border-gray-700 dark:hover:border-transparent">
            <div className="mt-4">
              <h1 className="text-xl font-semibold capitalize text-primary md:text-2xl dark:text-white group-hover:text-white">
                West End Branch
              </h1>
              <p className="mt-2 text-neutral-400 dark:text-gray-300 group-hover:text-gray-300">
                321 West End Road, West End City, NY 10004
              </p>
              <p className="mt-2 text-neutral-400 dark:text-gray-300 group-hover:text-gray-300">
                Contact: (888) 765-4321
              </p>
            </div>

            <p className="mt-4 text-neutral-400 dark:text-gray-300 group-hover:text-gray-300">
              Visit our West End branch for specialized services and
              consultations. Plenty of parking and easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branch;
