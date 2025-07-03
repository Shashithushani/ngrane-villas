// import Image from "next/image";

// export default function VillaCard({ villa }) {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm">
//       <Image
//         src={villa.image}
//         alt={villa.name}
//         width={400}
//         height={200}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-1">{villa.name}</h2>
//         <p className="text-gray-600 mb-2">{villa.description}</p>
//         <ul className="text-sm text-gray-700 mb-2">
//           <li>👥 Guests: {villa.guests}</li>
//           <li>🛏️ Bedrooms: {villa.bedrooms}</li>
//           <li>🛁 Bathrooms: {villa.bathrooms}</li>
//         </ul>
//         <div className="flex flex-wrap gap-2 mb-2">
//           {villa.amenities.map((item) => (
//             <span
//               key={item}
//               className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//         <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// }
