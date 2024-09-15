import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { useEffect, useState } from "react";

interface PriceRangeProps {
  onPriceRangeChange: (min: number, max: number) => void;
}

const PriceRange = ({ onPriceRangeChange }: PriceRangeProps) => {
  const [values, setValues] = useState([0, 1000]);

  useEffect(() => {
    onPriceRangeChange(values[0], values[1]);
  }, [values, onPriceRangeChange]);

  return (
    <div className="w-full space-y-5 sm:w-72">
      <DualRangeSlider
        label={(value) => <span>${value}</span>}
        value={values}
        onValueChange={setValues}
        min={0}
        max={1000}
        step={1}
        className="text-white"
      />
    </div>
  );
};

export default PriceRange;
