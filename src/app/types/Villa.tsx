export interface Amenity {
  id: number;
  code: string;
  name: string;
}

export interface Media {
  url: string;
  isMain: boolean;
  position: number;
}

export interface City {
  id: number;
  name: string;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface Villa {
  id: number;
  name: string;
  image: string;
  externalId: string;
  description: string;
  address: string;
  sizeSqm: number;
  area: string;
  city: City;
  amenities: Amenity[];
  media: Media[];
  maxOccupancy: number;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  startingPricePerNight: number;
  datesUnavailable: string[];
  checkinUnavailable: string[];
  checkoutUnavailable: string[];
  checkInAfter: string;
  checkoutBefore: string;
  geo: Geo;
}
