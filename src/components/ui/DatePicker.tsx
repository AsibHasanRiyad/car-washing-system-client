"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({
  setDate,
}: {
  setDate: (value: Date | undefined) => void;
}) {
  const [date, setInternalDate] = React.useState<Date | undefined>(undefined);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setInternalDate(selectedDate);
    setDate(selectedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left w-[300px] md:w-full font-normal bg-white",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="w-4 h-4 mr-2" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          disabled={(date) => date < new Date()}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
