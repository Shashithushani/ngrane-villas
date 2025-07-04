"use client";

import Image from "next/image";
import villas from "../villas.json";

interface Villa {
  id: number;
  name: string;
  description: string;
  area: string;
  startingPricePerNight: number;
  media: { url: string; isMain: boolean; position: number }[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
}

export default function NotAvailable() {
  const notAvailableVillas = (villas as unknown as Villa[]).slice(0, 3);

  return (
    <div className="px-4 py-8 bg-gray-100 mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notAvailableVillas.map((villa) => {
          const mainImage = villa.media.find((m) => m.isMain)?.url;

          return (
            <div
              key={villa.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto"
            >
              {mainImage && (
                <Image
                  src={mainImage}
                  alt={villa.name}
                  width={200}
                  height={150}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-l text-black font-semibold mb-1">
                  {villa.name}
                </h2>
                <p className="text-xs text-gray-600 mb-2">{villa.area}</p>
                <p className="text-gray-700 text-sm mb-2 line-clamp-2">
                  {villa.description}
                </p>

                <div className="flex justify-center p-6 space-x-10 text-black">
                  <p className="mb-1">👥 : {villa.guests}</p>
                  <p className="mb-1">🛏️ : {villa.bedrooms}</p>
                  <p className="mb-1">🛁 : {villa.bathrooms}</p>
                </div>
                <p className="text-green-600 font-bold">
                  €{villa.startingPricePerNight} / night
                </p>
                <hr></hr>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
