"use client";

import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface CalendarCardProps {
  selectedDate?: Date;
  onDateSelect: (date: Date) => void;
  isLoading?: boolean;
}

export default function CalendarCard({
  selectedDate,
  onDateSelect,
  isLoading,
}: CalendarCardProps) {
  // Force today to be evaluated on client-side only
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    // This runs ONLY in the browser, ensuring correct date
    setToday(new Date());
  }, []);

  // Show loading state while date is being determined
  if (!today) {
    return (
      <div className="w-full max-w-sm rounded-lg border bg-card p-4 shadow-sm">
        <div className="animate-pulse space-y-2">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="grid grid-cols-7 gap-2">
            {[...Array(35)].map((_, i) => (
              <div key={i} className="h-8 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm rounded-lg border bg-card p-4 shadow-sm">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={(date) => {
          if (date) {
            onDateSelect(date);
          }
        }}
        disabled={[
          { after: today }, // Now uses client-side today
        ]}
      />
    </div>
  );
}