import Link from "next/link";
import Checkbox from "../components/checkbox";
import HeaderNav from "../components/header";
import Footer from "../components/footer";

export default function Villas() {
  return (
    <div>
      <HeaderNav />

      <div className="relative h-80 bg-[url('/images/villa-7.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="text-center bg-opacity-50 p-8 rounded-lg z-10">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-4">Our Villas</h1>
            <p className="text-xl mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className="absolute left-1/2 bottom-[-40px] transform -translate-x-1/2 z-20">
          <Checkbox />
        </div>
      </div>

      <div className="mt-20"></div>
      <div className="flex justify-center text-black">
        <p className="max-w-xl text-center">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-2xl text-black">
          Not available properties
        </h1>
        <p className="text-center  text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div>
        <div className="h-142 bg-[url('/images/villa-8.jpg')] bg-cover bg-center flex items-center justify-start">
          <div className="text-black rounded shadow p-10 bg-white ml-20">
            <h1 className="text-3xl">Lorem ipsum sit amet</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pharetra nisi dolor, dignissim mattis mauris iaculis vitae.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
            </p>
            <Link href="/about-us">
              <button className="bg-black w-1/6 hover:bg-cyan-700 text-center text-white font-semibold mt-4 py-3 px-4 rounded shadow">
                About us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
