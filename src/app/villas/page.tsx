import React from "react";
import VillasComponent from "./VillasComponent";

export default function VillasPage({ searchParams }) {
  const params = React.use(searchParams);

  const { arrival, departure, destination, guests } = params;

  return (
    <VillasComponent
      arrival={arrival}
      departure={departure}
      destination={destination}
      guests={guests ? parseInt(guests) : undefined}
    />
  );
}
