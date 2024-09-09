import { FastForward, Settings, TreeDeciduous } from "lucide-react";
import Header from "../shared/Header";

const WhyUs = () => {
  return (
    <div className="bg-secondary">
      <section
        id="features"
        className="relative block px-6 py-10 border-t border-b md:py-20 md:px-10 border-neutral-900 bg-neutral-900/30"
      >
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="flex items-center justify-center my-3 font-medium tracking-wider text-gray-400 uppercase">
            Why choose us
          </span>
          <Header
            size="text-4xl"
            title="Your Car Deserves the Best Care"
          ></Header>
          <p className="w-full max-w-xl mx-auto my-4 font-medium leading-relaxed tracking-wide text-center text-gray-400 bg-transparent">
            We offer premium car wash services with attention to detail, using
            top-quality products and advanced techniques to ensure your car
            looks as good as new.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-10 mx-auto max-w-7xl pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 text-center border rounded-md shadow border-neutral-800 bg-neutral-900/50">
            <div
              className="flex items-center justify-center w-12 h-12 mx-auto border rounded-md button-text "
              style={{
                backgroundImage:
                  "linear-gradient(rgb(112, 59, 247) 0%, rgb(89, 43, 203) 100%)",
                borderColor: "rgb(112, 59, 247)",
              }}
            >
              <TreeDeciduous />
            </div>
            <h3 className="mt-6 text-gray-400">Eco-Friendly Products</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              We care for the environment and use biodegradable, non-toxic
              products that clean your car while being safe for the planet.
            </p>
          </div>

          <div className="p-8 text-center border rounded-md shadow border-neutral-800 bg-neutral-900/50">
            <div
              className="flex items-center justify-center w-12 h-12 mx-auto border rounded-md button-text "
              style={{
                backgroundImage:
                  "linear-gradient(rgb(112, 59, 247) 0%, rgb(89, 43, 203) 100%)",
                borderColor: "rgb(112, 59, 247)",
              }}
            >
              <FastForward />
            </div>
            <h3 className="mt-6 text-gray-400">Fast and Efficient</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              With our state-of-the-art technology and experienced staff, we
              ensure your car is sparkling clean in no time, without
              compromising quality.
            </p>
          </div>

          <div className="p-8 text-center border rounded-md shadow border-neutral-800 bg-neutral-900/50">
            <div
              className="flex items-center justify-center w-12 h-12 mx-auto border rounded-md button-text "
              style={{
                backgroundImage:
                  "linear-gradient(rgb(112, 59, 247) 0%, rgb(89, 43, 203) 100%)",
                borderColor: "rgb(112, 59, 247)",
              }}
            >
              <Settings />
            </div>
            <h3 className="mt-6 text-gray-400">Detail-Oriented Service</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              From exterior washing to interior cleaning, we leave no spot
              uncleaned, ensuring your car gets the attention it deserves.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 z-0 w-full border-b h-1/3"
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(112, 59, 247, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(112, 59, 247, 0.2)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 w-full h-1/3"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(112, 59, 247, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(112, 59, 247, 0.2)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default WhyUs;
