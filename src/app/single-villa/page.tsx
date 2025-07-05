import React from "react";
import { Villa } from "../types/Villa";
import SingleVillaComponent from "./SingleVillaComponent";

type SingleVilla = {
  id: number;
};

export default function SingleVilla({ searchParams }) {
  const params = React.use(searchParams);

  const { villaId } = params;
  return <SingleVillaComponent villaId={villaId} />;
}
