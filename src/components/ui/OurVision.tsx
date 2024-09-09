import brandingVideo from "../../assets/video/wash.mp4";
import Header from "../shared/Header";
export default function BrandingSection() {
  return (
    <div>
      <div className="relative px-6 py-24 overflow-hidden bg-secondary isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 overflow-hidden -z-10"></div>
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-primary">
                  Superior Service, Every Time
                </p>
                <Header size=" text-4xl" title="Excellence in Every Detail" />
                <p className="mt-6 text-lg leading-normal tracking-wide text-justify bg-transparent text-text">
                  We believe in delivering an exceptional car care experience
                  that goes beyond just cleaning. Every vehicle we handle
                  receives the best treatment, combining innovation, care, and
                  precision to ensure your car shines every time.Our approach
                  combines cutting-edge technology and a passion for cars. We
                  pay attention to every detail, from spotless interiors to a
                  gleaming exterior finish. Your car deserves nothing less than
                  perfection, and that's exactly what we strive to deliver every
                  time.
                </p>
              </div>
            </div>
          </div>
          <div className="p-12 -mt-12 -ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <video
              src={brandingVideo}
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
}
