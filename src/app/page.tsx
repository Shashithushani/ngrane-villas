import Image from "next/image";
import HeaderNav from "./components/header";
import Checkbox from "./components/checkbox";
import Footer from "./components/footer";
import Link from "next/link";

// import VillaCard from "./components/villaCard";

export default function Home() {
  const villas = [
    {
      image: "/images/villa-1.jpg",
      id: 1,
      name: "Villa Olimpus",
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 245,
    },
    {
      image: "/images/villa-2.jpg",
      id: 2,
      name: "Villa Zeus",
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 245,
    },
    {
      image: "/images/villa-3.jpg",
      id: 3,
      name: "Villa Athena",
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 245,
    },
  ];
  return (
    <div>
      <HeaderNav />
      {/* <DatepickerClient /> */}
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
              <Image
                src={villa.image}
                alt={villa.name}
                width={450}
                height={340}
              />
              <h2 className="text-xl text-black font-bold mb-2">
                {villa.name}
              </h2>
              <div className="flex justify-center p-6 space-x-18 text-black">
                <p className="mb-1">👥 : {villa.guests}</p>
                <p className="mb-1">🛏️ : {villa.bedrooms}</p>
                <p className="mb-1">🛁 : {villa.bathrooms}</p>
              </div>

              <p className="mt-4 font-semibold">
                Starting at{" "}
                <span className="text-right text-black">{villa.price}€</span> /
                night
              </p>
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
            src="/images/villa-4.jpg" // relative to /public folder
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
      <div className="text-black text-center ">
        <h2 className="text-4xl pb-4 font-bold">Lorem ipsum dolor sit amet</h2>
        <p className="pb-4">LOREM IPSUM DOLOR SIT AMET CONSECTETUR.</p>
        <p className="px-100 pb-10">
          Sed sint temporibus et minus possimus ut dolor sint ea dolores tempora
          ut delectus vero qui quibusdam fugit qui voluptas quia. Rem omnis modi
          aut aliquid dolorem ex illo ipsum sed impedit enim et quasi
          perspiciatis sit odit accusantium.
        </p>
        <div className="flex px-20 space-x-10 pb-30">
          <div className="text-center">
            <Image
              src="/images/concierge.jpg" // relative to /public folder
              alt="concierge"
              width={600}
              height={400}
            />
            <h3 className="font-bold">Concierge service</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pharetra nisi dolor, dignissim mattis mauris iaculis vitae.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/car.jpg" // relative to /public folder
              alt="concierge"
              width={600}
              height={200}
            />
            <h3 className="font-bold">car rental service</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pharetra nisi dolor, dignissim mattis mauris iaculis vitae.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/experiences.jpg" // relative to /public folder
              alt="concierge"
              width={600}
              height={400}
            />
            <h3 className="font-bold">Lifetime experiences</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pharetra nisi dolor, dignissim mattis mauris iaculis vitae.
            </p>
          </div>
        </div>
        <div>
          <div className="h-162 bg-[url('/images/villa-5.jpg')] bg-cover bg-center flex items-center justify-center">
            <div className="text-black rounded shadow p-10 bg-white ">
              <h1 className="text-4xl">Lorem ipsum sit amet</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                pharetra nisi dolor, dignissim mattis mauris iaculis vitae.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
              <button className="bg-black hover:bg-cyan-700 mt-6 text-center text-white font-semibold py-3 px-6 rounded shadow">
                Contact us now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <hr className="border-t-2 border-gray-300 my-10 w-3/4 mx-auto" />
    </div>
  );
}
