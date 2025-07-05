"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enUS } from "date-fns/locale";

registerLocale("en-US", enUS);

type DateRange = {
  start: Date | null;
  end: Date | null;
};

interface Props {
  onChange?: (range: DateRange) => void;
}

const DateRangePicker: React.FC<Props> = ({ onChange }) => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  const handleChange = (range: [Date | null, Date | null]) => {
    setDateRange(range);
    if (onChange) {
      const [start, end] = range;
      onChange({ start, end });
    }
  };

  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      onChange={handleChange}
      isClearable
      dateFormat="yyyy-MM-dd"
      placeholderText="Select dates"
      className="p-2 border rounded"
      locale="en-US"
    />
  );
};

export default DateRangePicker;
