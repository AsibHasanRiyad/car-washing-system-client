import CtaComponents from "@/components/CtaComponents";
import FeaturedServices from "@/components/FeaturedServices";
import Ratings from "@/components/Ratings";

import Hero from "@/components/shared/Hero";
import Branch from "@/components/ui/Branch";

import PricePlan from "@/components/ui/PricePlan";
import WhyUs from "@/components/ui/WhyUs";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Hero />
      <CtaComponents />
      <PricePlan />
      <FeaturedServices />
      <Branch />
      <Ratings />
      <WhyUs />
    </div>
  );
};

export default Home;
