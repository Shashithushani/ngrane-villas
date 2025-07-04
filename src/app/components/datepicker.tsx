"use client";

import { useEffect } from "react";
import "preline/preline"; // Required to load HS components
import { init } from "preline";

export default function DatePickerComponent() {
  useEffect(() => {
    import("preline").then(({ default: HS }) => {
      HS.init(); // Initialize all HS components
    });
  }, []);

  return (
    <div>
      <label className="block text-sm font-medium text-black mb-1">
        Departure
      </label>
      <input
        className="hs-datepicker"
        type="text"
        placeholder="Select day"
        data-hs-datepicker='{
          "type": "multiple",
          "displayDatesOutside": false,
          "selectionDatesMode": "multiple-ranged",
          "displayMonthsCount": 2,
          "selectedDates": ["2025-01-10 2025-02-15"],
          "dateMax": "2050-12-31",
          "mode": "custom-select",
          "inputModeOptions": {
            "itemsSeparator": " / "
          }
        }'
      />
    </div>
  );
}
