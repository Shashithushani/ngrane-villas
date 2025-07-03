"use client";
import { useState } from "react";

export default function Checkbox() {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [guests, setGuests] = useState(1);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-8xl mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Arrival */}

        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Arrival
          </label>
          <input
            type="date"
            className="hs-datepicker block w-full border border-gray-300 text-gray-700 rounded-lg px-3 py-2"
            placeholder="Select arrival date"
            data-hs-datepicker
            onChange={(e) => setArrival(e.target.value)}
          />
        </div>

        {/* Departure */}

        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Departure
          </label>
          <input
            type="date"
            className="hs-datepicker block w-full border border-gray-300 text-gray-700 rounded-lg px-3 py-2"
            placeholder="Select departure date"
            data-hs-datepicker
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>

        {/* Destination */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Destination
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full border border-gray-300 text-gray-500  rounded-lg px-3 py-2"
          >
            <option>Choose a destination</option>
            <option>Palermo</option>
            <option>Trapani</option>
            <option>Pantelleria</option>
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
          <button className="w-full bg-black hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
}
