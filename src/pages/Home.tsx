import CtaComponents from "@/components/CtaComponents";
import FeaturedServices from "@/components/FeaturedServices";

import Hero from "@/components/shared/Hero";
import Branch from "@/components/ui/Branch";

import PricePlan from "@/components/ui/PricePlan";
import WhyUs from "@/components/ui/WhyUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <CtaComponents />
      <PricePlan />
      <FeaturedServices />
      <Branch />
      <WhyUs />
    </div>
  );
};

export default Home;
