"use client";
import { useState } from "react";
import { useVillas } from "./VillaDataProvider";
import DateRangePicker from "./DateRangePicker";
import { useRouter } from "next/navigation";

export default function Checkbox() {
  const allVillas = useVillas();
  const destinations = [
    ...new Map(allVillas.map((villa) => [villa.city.id, villa.city])).values(),
  ];

  const [arrival, setArrival, getarr] = useState("");
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [guests, setGuests] = useState(1);

  const handleDateChange = ({
    start,
    end,
  }: {
    start: Date | null;
    end: Date | null;
  }) => {
    if (start != null) {
      console.log(start);
      setArrival(formatDateToString(start));
      console.log(getarr);
    }

    if (end != null) {
      setDeparture(formatDateToString(end));
    }
  };

  const router = useRouter();

  const handleClick = () => {
    router.push(
      "/villas?arrival=" +
        arrival +
        "&departure=" +
        departure +
        "&destination=" +
        destination +
        "&guests=" +
        guests
    );
  };

  function formatDateToString(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // months are 0-based
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-8xl mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Arrival and Departure Dates
          </label>
          <DateRangePicker onChange={handleDateChange} />
        </div>

        {/* Destination */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Destination
          </label>
          <select
            id="destinationSelect"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full border border-gray-300 text-gray-500  rounded-lg px-3 py-2"
          >
            <option value="" disabled>
              Choose a destination
            </option>
            {destinations.map((dest) => (
              <option key={dest.id} value={dest.name}>
                {dest.name}
              </option>
            ))}
          </select>
        </div>

        {/* Guests */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Guests
          </label>
          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full border border-gray-300 text-gray-500  rounded-lg px-3 py-2"
          />
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button
            className="w-full bg-black hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg"
            onClick={handleClick}
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
}
