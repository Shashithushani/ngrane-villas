"use client";
import Link from "next/link";
import HeaderNav from "../components/header";
import Footer from "../components/footer";
import { useVillas } from "../components/VillaDataProvider";
import VillaCard from "../components/VillaCard";
import { useState } from "react";

export default function SingleVilla() {
  return (
    <div className="pl-20">
      <div></div>
      <div className="text-black ">
        <p>
          Sed sint temporibus et minus possimus ut dolor sint ea dolores tempora
          ut delectus vero qui quibusdam fugit qui voluptas quia. Rem omnis modi
          aut aliquid dolorem ex illo ipsum sed impedit enim et quasi
          perspiciatis sit odit accusantium.
        </p>
        <p>Read more</p>
      </div>
      <div></div>
    </div>
  );
}
