import Image from "next/image";
import HeaderNav from "../components/header";
import Footer from "../components/footer";
import Services from "../components/services";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div>
      <HeaderNav />
      <div className="h-80 bg-[url('/images/villas-lobby.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="text-center bg-opacity-50 p-8 rounded-lg">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div className="flex my-16 w-full">
        <div className="w-1/2 text-black p-20 ">
          <h1 className="text-3xl">Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet. Et quibusdam sapiente aut possimus
            quidem id laborum aspernatur in libero animi id voluptatibus minima
            et voluptate vero. Sit beatae neque At vitae quaerat eos omnis
            distinctio ut voluptatem minus.
          </p>
          <p>
            Lorem ipsum dolor sit amet. Et quibusdam sapiente aut possimus
            quidem id laborum aspernatur in libero animi id voluptatibus minima
            et voluptate vero. Sit beatae neque At vitae quaerat eos omnis
            distinctio ut voluptatem minus.
          </p>
          <p>
            Lorem ipsum dolor sit amet. Et quibusdam sapiente aut possimus
            quidem id laborum aspernatur in libero animi id voluptatibus minima
            et voluptate vero. Sit beatae neque At vitae quaerat eos omnis
            distinctio ut voluptatem minus.
          </p>
        </div>
        <div className="flex w-1/2 justify-start pr-4 pl-20 py-10 w-1/2">
          <Image
            src="/images/villa-about.jpg"
            alt="villa"
            width={800}
            height={400}
          />
        </div>
      </div>
      <div className="h-142 bg-[url('/images/villa-6.jpg')] bg-cover bg-center flex items-center justify-start">
        <div className="text-black rounded shadow p-10 bg-white ml-20">
          <h1 className="text-3xl">Lorem ipsum sit amet</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pharetra nisi dolor, dignissim mattis mauris iaculis vitae.
          </p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
          <Link href="/about-us">
            <button className="bg-black w-1/6 hover:bg-cyan-700 text-center text-white font-semibold mt-4 py-3 px-4 rounded shadow">
              About us
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-20">
        <Services />
      </div>
      <Footer />
    </div>
  );
}
