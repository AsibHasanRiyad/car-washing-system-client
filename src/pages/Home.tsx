import Hero from "@/components/shared/Hero";
import Branch from "@/components/ui/Branch";

import PricePlan from "@/components/ui/PricePlan";
import WhyUs from "@/components/ui/WhyUs";

const Home = () => {
  return (
    <div>
      <Hero />

      <PricePlan />
      <Branch />
      <WhyUs />
    </div>
  );
};

export default Home;
