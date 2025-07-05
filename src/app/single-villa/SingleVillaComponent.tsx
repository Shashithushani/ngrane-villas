/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useVillas } from "../components/VillaDataProvider";

import dynamic from "next/dynamic";
import HeaderNav from "../components/header";
import Footer from "../components/footer";

const MiniMap = dynamic(() => import("../components/MiniMap"), { ssr: false });

type SingleVillaProps = {
  villaId: number;
};

export default function SingleVillaComponent({ villaId }: SingleVillaProps) {
  const allVillas = useVillas();
  const villa = allVillas.find((e) => e.id == villaId);

  return (
    <div>
      <HeaderNav />
      <div className="pl-20">
        <div>
          <div
            key={villa.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto"
          >
            <Image
              src={villa.image}
              alt={villa.name}
              width={400}
              height={350}
              className="w-400 h-80 object-cover"
            />

            <div className="p-6">
              <h2 className="text-l text-black font-semibold mb-1">
                {villa.name}
              </h2>
              <p className="text-xs text-gray-600 mb-2">{villa.area}</p>
              <p className="text-gray-700 text-sm mb-2 line-clamp-2">
                {villa.description}
              </p>

              <div className="flex justify-center p-6 space-x-10 text-black">
                <p className="mb-1">👥 : {villa.maxOccupancy}</p>
                <p className="mb-1">🛏️ : {villa.numberOfBedrooms}</p>
                <p className="mb-1">🛁 : {villa.numberOfBathrooms}</p>
              </div>
              <div>
                <p>{villa.address}</p>
                {/* <p>{villa.geo}</p> */}
                <div className="flex space-x-2 mt-2 overflow-x-auto">
                  {villa.media.map((mediaItem) => (
                    <img
                      key={mediaItem.position}
                      src={mediaItem.url} // Access URL string here
                      alt={`${villa.name} media`}
                      className="rounded-md w-24 h-24 object-cover"
                    />
                  ))}
                </div>
              </div>

              <p className="text-green-600 font-bold">
                €{villa.startingPricePerNight} / night
              </p>
            </div>
          </div>
        </div>
        <div className="text-black ">
          <p>
            Sed sint temporibus et minus possimus ut dolor sint ea dolores
            tempora ut delectus vero qui quibusdam fugit qui voluptas quia. Rem
            omnis modi aut aliquid dolorem ex illo ipsum sed impedit enim et
            quasi perspiciatis sit odit accusantium.
          </p>
          <p>Read more</p>
        </div>
        <div className="flex justify-left my-6">
          <div className="w-full max-w-4xl h-96">
            <MiniMap latitude={villa?.geo.lat} longitude={villa?.geo.lng} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
