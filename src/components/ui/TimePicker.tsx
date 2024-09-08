import React from "react";
import { Clock } from "lucide-react";

import { TimePickerInput } from "./timePicker/time-picker-input";

interface TimePickerDemoProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

const formatTime = (date: Date | undefined): string => {
  if (!date) return "00:00";
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export function TimePickerDemo({ date, setDate }: TimePickerDemoProps) {
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);
  const secondRef = React.useRef<HTMLInputElement>(null);

  const handleTimeChange = (newDate: Date | undefined) => {
    setDate(newDate);
  };

  return (
    <div className="flex items-end gap-2">
      <TimePickerInput
        picker="hours"
        date={date}
        setDate={handleTimeChange}
        ref={hourRef}
        onRightFocus={() => minuteRef.current?.focus()}
      />

      <TimePickerInput
        picker="minutes"
        date={date}
        setDate={handleTimeChange}
        ref={minuteRef}
        onLeftFocus={() => hourRef.current?.focus()}
        onRightFocus={() => secondRef.current?.focus()}
      />

      <TimePickerInput
        picker="seconds"
        date={date}
        setDate={handleTimeChange}
        ref={secondRef}
        onLeftFocus={() => minuteRef.current?.focus()}
      />

      <Clock className="w-4 h-4 ml-2" />

      <div className="mt-2">
        <p>Time: {formatTime(date)}</p>
      </div>
    </div>
  );
}
