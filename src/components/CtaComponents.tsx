import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Bookmark, Building, Car, Heart, Settings } from "lucide-react";
import Header from "./shared/Header";

const CtaComponents = () => {
  return (
    <section className="py-8 mt-10 text-text bg-secondary md:py-16">
      <div className="container px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div>
            {/*  */}

            <div>
              <div className="grid grid-cols-2 gap-10 ">
                <div className="space-y-3">
                  <span className="inline-block p-3 bg-third text-primary rounded-xl ">
                    <Settings />
                  </span>

                  <h1 className="text-xl font-semibold capitalize text-primary ">
                    New Components
                  </h1>

                  <p className="text-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident ab nulla quod dignissimos vel non corrupti
                    doloribus voluptatum eveniet
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="inline-block p-3 bg-third text-primary rounded-xl ">
                    <Heart />
                  </span>

                  <h1 className="text-xl font-semibold capitalize text-primary ">
                    elegant Dark Mode
                  </h1>

                  <p className="text-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident ab nulla quod dignissimos vel non corrupti
                    doloribus voluptatum eveniet
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="inline-block p-3 bg-third text-primary rounded-xl t">
                    <Building />
                  </span>

                  <h1 className="text-xl font-semibold capitalize text-primary ">
                    Easy to customiztions
                  </h1>

                  <p className="text-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident ab nulla quod dignissimos vel non corrupti
                    doloribus voluptatum eveniet
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="inline-block p-3 bg-third text-primary rounded-xl t">
                    <Car />
                  </span>

                  <h1 className="text-xl font-semibold capitalize text-primary ">
                    Simple & clean designs
                  </h1>

                  <p className="text-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident ab nulla quod dignissimos vel non corrupti
                    doloribus voluptatum eveniet
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
          </div>

          {/* Text Section */}
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <Header
              title="Professional Full-Service Car Wash "
              size="text-4xl"
            />
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-xl font-medium">$50 – Premium Package</p>
            </div>

            {/* CTA Buttons */}
            <div>
              <Link to={"/all-services"}>
                <Button className="flex gap-2 mt-4 text-lg text-gray-50">
                  {" "}
                  Book a Service <Bookmark />
                </Button>
              </Link>
            </div>

            <hr className="my-6 text-base border-gray-200 md:my-8 " />

            {/* Service Description */}
            <p className="mb-6 text-justify ">
              Enjoy a full-service car wash with CleanCarCo, providing premium
              exterior and interior cleaning, waxing, and polishing. Our
              state-of-the-art equipment and environmentally friendly products
              ensure your car looks pristine.
            </p>

            <p className="text-justify ">
              Get your car looking brand new with services like undercarriage
              wash, tire dressing, vacuuming, and interior detailing. We also
              offer a range of add-ons for extra care, including waxing, clay
              bar treatments, and more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaComponents;
