import Image from "next/image";

export default function Services() {
  return (
    <div className="text-black text-center ">
      <h2 className="text-4xl pb-4 font-bold">Lorem ipsum dolor sit amet</h2>
      <p className="pb-4">LOREM IPSUM DOLOR SIT AMET CONSECTETUR.</p>
      <p className="px-100 pb-10">
        Sed sint temporibus et minus possimus ut dolor sint ea dolores tempora
        ut delectus vero qui quibusdam fugit qui voluptas quia. Rem omnis modi
        aut aliquid dolorem ex illo ipsum sed impedit enim et quasi perspiciatis
        sit odit accusantium.
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
            src="/images/experiences.jpg"
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
        <div className="h-162 bg-[url('/images/pool-house.jpg')] bg-cover bg-center flex items-center justify-center">
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
  );
}
