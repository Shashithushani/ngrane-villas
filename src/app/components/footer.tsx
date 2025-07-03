"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className=" text-black ">
        <h1 className="font-bold text-black text-6xl pt-8">
          The<span className="italic">Villas</span>
        </h1>
      </div>
      <div className="flex flex justify-center space-x-40 text-black">
        <div>
          <h1>THEVILLAS CONTACTS</h1>
          <ul>
            <li>info@thevillas.it</li>
            <li>+3922222222</li>
            <li>Loren Ipsum dolor sit</li>
          </ul>
        </div>
        <div>
          <h1>SITE MAP</h1>
          <ul>
            <li>About us</li>
            <li>Our Villas</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1>LEGAL</h1>
          <ul>
            <li>Privacy ppolicy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
