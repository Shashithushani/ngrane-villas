"use client";

import Link from "next/link";
import { Villa } from "../types/Villa";
import Image from "next/image";

type VillaProps = {
  villa: Villa;
};

export default function VillaCard({ villa }: VillaProps) {
  const link = "/single-villa?villaId=" + villa.id;
  console.log(villa);
  return (
    <Link href={link}>
      <div
        style={{
          cursor: "pointer",
          padding: "16px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
        key={villa.id}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto"
      >
        <Image
          src={villa.image}
          alt={villa.name}
          width={200}
          height={150}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h2 className="text-l text-black font-semibold mb-1">{villa.name}</h2>
          <p className="text-xs text-gray-600 mb-2">{villa.area}</p>
          <p className="text-gray-700 text-sm mb-2 line-clamp-2">
            {villa.description}
          </p>

          <div className="flex justify-center p-6 space-x-10 text-black">
            <p className="mb-1">👥 : {villa.maxOccupancy}</p>
            <p className="mb-1">🛏️ : {villa.numberOfBedrooms}</p>
            <p className="mb-1">🛁 : {villa.numberOfBathrooms}</p>
          </div>
          <p className="text-green-600 font-bold">
            €{villa.startingPricePerNight} / night
          </p>
          <hr></hr>
        </div>
      </div>
    </Link>
  );
}
