"use client";
import Image from "next/image";
import HeaderNav from "./components/header";
import Checkbox from "./components/checkbox";
import Footer from "./components/footer";
import Link from "next/link";
import Services from "./components/services";
import { useVillas } from "./components/VillaDataProvider";
import VillaCardComponent from "./components/VillaCardComponent";

export default function Home() {
  const allVillas = useVillas();
  const villas = allVillas.slice(0, 3); // Show only a sample of 3 hotels in the landing page

  return (
    <div>
      <HeaderNav />

      <div className="h-162 bg-[url('/images/villa-rentals.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="text-center bg-opacity-50 p-8 rounded-lg">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-4">Relax in our Villas</h1>
            <p className="text-xl mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <Checkbox />
        </div>
      </div>
      <div className="mt-10 pl-20">
        <div className=" mx-auto text-left text-black mb-10">
          <h2 className="text-4xl pb-4">Lorem ipsum dolor sit amet ...</h2>
          <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR.</p>
          <p className="pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pharetra nisi dolor, dignissim mattis mauris iaculis vitae.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
      </div>

      {/* View more button */}
      <div className="flex justify-start pl-20">
        {/* Villas container */}
        <div className="flex space-x-30">
          {villas.map((villa) => (
            <div key={villa.id} className="border rounded-lg p-6 shadow w-120">
              <VillaCardComponent villa={villa} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center m-8">
        <button className="bg-black hover:bg-cyan-700 text-center text-white font-semibold py-3 px-6 rounded shadow">
          Discover our Villas
        </button>
      </div>
      <div className="flex items-stretch bg-gray-100 mb-10">
        <div className="flex justify-start pr-4 pl-20 py-10 w-1/2">
          <Image
            src="/images/villa-4.jpg"
            alt="Villa"
            width={600}
            height={400}
          />
        </div>
        <div className="text-black p-4 w-1/2 pr-20 flex flex-col justify-center">
          <h2 className="text-4xl pb-4">Lorem ipsum dolor sit amet?</h2>
          <p className="pb-4">LOREM IPSUM DOLOR SIT AMET CONSECTETUR.</p>
          <p className="pb-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident,{" "}
          </p>
          <p>
            Sed sint temporibus et minus possimus ut dolor sint ea dolores
            tempora ut delectus vero qui quibusdam fugit qui voluptas quia. Rem
            omnis modi aut aliquid dolorem ex illo ipsum sed impedit enim et
            quasi perspiciatis sit odit accusantium.
          </p>
          <Link href="/about-us">
            <button className="bg-black w-2/6 hover:bg-cyan-700 text-center text-white font-semibold mt-4 py-3 px-6 rounded shadow">
              About us
            </button>
          </Link>
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
}
