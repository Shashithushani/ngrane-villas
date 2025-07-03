import Image from "next/image";
import HeaderNav from "../components/header";
import Footer from "../components/footer";

export default function AboutUs() {
  return (
    <div>
      <HeaderNav />
      <div className="h-162 bg-[url('/images/villas-lobby.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="text-center bg-opacity-50 p-8 rounded-lg">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-4">Relax in our Villas</h1>
            <p className="text-xl mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-black p-20 ">
          <h1 className="text-3xl">Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet. Et quibusdam sapiente aut possimus
            quidem id laborum aspernatur in libero animi id voluptatibus minima
            et voluptate vero. Sit beatae neque At vitae quaerat eos omnis
            distinctio ut voluptatem minus.
          </p>
        </div>
        <div className="flex justify-start pr-4 pl-20 py-10 w-1/2">
          <Image
            src="/images/villa-about.jpg" // relative to /public folder
            alt="Villa"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
