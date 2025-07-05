"use client";

import Link from "next/link";
import Checkbox from "../components/checkbox";
import HeaderNav from "../components/header";
import Footer from "../components/footer";
import { useVillas } from "../components/VillaDataProvider";
import VillaCard from "../components/VillaCard";

interface VillasComponentProps {
  arrival?: string;
  departure?: string;
  destination?: string;
  guests?: number;
}

function isDateRangeUnavailable(arrival, departure, datesUnavailable) {
  const start = new Date(arrival);
  const end = new Date(departure);

  const unavailableSet = new Set(datesUnavailable);

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const formattedDate = d.toISOString().split("T")[0];

    if (unavailableSet.has(formattedDate)) {
      return true;
    }
  }

  return false;
}

export default function VillasComponent({
  arrival,
  departure,
  destination,
  guests,
}: VillasComponentProps) {
  let allVillas = useVillas();

  let availableVillas = allVillas;

  if (arrival && departure) {
    availableVillas = availableVillas.filter(
      (e) =>
        !e.checkinUnavailable.includes(arrival) &&
        !e.checkoutUnavailable.includes(departure) &&
        !isDateRangeUnavailable(arrival, departure, e.datesUnavailable)
    );
  }

  if (destination) {
    availableVillas = availableVillas.filter((e) => e.city.name == destination);
  }

  if (guests) {
    availableVillas = availableVillas.filter((e) => e.maxOccupancy >= guests);
  }

  const unavailableVillas = allVillas.filter(
    (item) => !availableVillas.includes(item)
  );

  return (
    <div>
      <HeaderNav />

      <div className="relative h-80 bg-[url('/images/villa-7.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="text-center bg-opacity-50 p-8 rounded-lg z-10">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-4">Our Villas</h1>
            <p className="text-xl mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className=" left-1/2 bottom-[-40px] mt-40 transform -translate-x-1/2 z-20">
          <Checkbox />
        </div>
      </div>

      <div className="mt-20"></div>
      <div className="flex justify-center text-black">
        <p className="max-w-xl text-center">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>

      <div className="mt-10 px-20">
        <h1 className="text-center text-2xl text-black">
          Available properties
        </h1>
        <div className="px-10 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {availableVillas.map((villa) => (
              <div key={villa.id} className="rounded-lg p-6 shadow w-120">
                <VillaCard villa={villa} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 px-20">
        <h1 className="text-center text-2xl text-black">
          Not available properties
        </h1>
        <div className="px-10 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {unavailableVillas.map((villa) => (
              <div key={villa.id} className="rounded-lg p-6 shadow w-120">
                <VillaCard villa={villa} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="h-142 bg-[url('/images/villa-8.jpg')] bg-cover bg-center flex items-center justify-start">
          <div className="text-black rounded shadow p-10 bg-white ml-20">
            <h1 className="text-3xl">Lorem ipsum sit amet</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pharetra nisi dolor, dignissim mattis mauris iaculis vitae.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
            </p>
            <Link href="/about-us">
              <button className="bg-black w-1/6 hover:bg-cyan-700 text-center text-white font-semibold mt-4 py-3 px-4 rounded shadow">
                About us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
