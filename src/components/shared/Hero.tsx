import video from "../../assets/video/hero.mp4";
import bmw from "../../assets/image/bmw.png";
import car from "../../assets/image/car3.png";
import nissan from "../../assets/image/nissan.png";
import car4 from "../../assets/image/car4.png";
import car5 from "../../assets/image/car5.png";
import car6 from "../../assets/image/car6.png";

const Hero = () => {
  return (
    <div className="relative">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Full Content overlay */}
      <div className="relative flex flex-col justify-between min-h-[90vh] bg-neutral-900 bg-opacity-60">
        <div className="max-w-5xl px-4 pt-24 mx-auto xl:px-0 lg:pt-40">
          <h1 className="relative z-10 text-6xl font-semibold text-white md:text-5xl">
            <span className="pl-2 text-white rounded-md  bg-primary">
              Clean
            </span>
            CarCo Your Car Deserves the Best Shine
          </h1>

          <div className="max-w-4xl">
            <p className="relative z-10 mt-5 text-lg text-neutral-400">
              At CleanCarCo, we believe that a clean car is more than just a
              vehicle—it’s a reflection of your style, your personality, and
              your pride. Located in the heart of the community, we’re committed
              to delivering exceptional car wash services with a focus on
              quality, convenience, and eco-friendly practices.
            </p>
          </div>
        </div>

        {/* Brand Logos aligned at the bottom */}
        <div className="relative z-10 pb-12">
          <div className="max-w-5xl px-4 mx-auto xl:px-0">
            <div className="mb-4">
              <h2 className="text-lg text-neutral-400">
                Trusted by BMW, Nissan, and more than 99,000 of you,
              </h2>
            </div>

            <div className="flex items-center justify-between gap-6">
              <img className="lg:w-20 lg:h-20 w-14 h-14" src={bmw} alt="BMW" />
              <img
                className="lg:w-20 lg:h-20 w-14 h-14"
                src={car4}
                alt="Audi"
              />
              <img
                className="lg:w-20 lg:h-20 w-14 h-14"
                src={car5}
                alt="Audi"
              />
              <img
                className="lg:w-20 lg:h-20 w-14 h-14"
                src={car6}
                alt="Audi"
              />
              <img
                className="hidden lg:w-20 lg:h-20 w-14 h-14 md:block"
                src={nissan}
                alt="Nissan"
              />
              <img
                className="hidden lg:w-20 lg:h-20 w-14 h-14 md:block"
                src={car}
                alt="Car"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
