import React from 'react';

 
export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      image: "/images/oPast-projects1.png",
      subtitle: "20kVA Solar System Installation",
      owner: "John Oluwadare",
      address: "Lagos, Nigeria",
    },
    {
      id: 2,
      image: "/images/oPast-projects2.png",
      subtitle: "20kVA Solar System Installation",
      owner: "Aliu Muhamed",
      address: "Abuja, Nigeria",
    },
    {
      id: 3,
      image: "/images/oPast-projects3.png",
      subtitle: "20kVA Solar System Installation",
      owner: "Samuel Johnson",
      address: "Kano, Nigeria",
    },
    {
      id: 4,
      image: "/images/r-fb.png",
      subtitle: "7.5kVA Solar System Installation",
      owner: "Grace Tosin",
      address: "Ibadan, Nigeria",
    },
    {
      id: 5,
      image: "/images/oPast-projects5.png",
      subtitle: "10kVA Solar System Installation",
      owner: "Emeka Okafor",
      address: "Enugu, Nigeria",
    },
    // {
    //   id: 6,
    //   image: "/images/oPast-projects6.png",
    //   subtitle: "Event Booking System",
    //   owner: "George Tamuno",
    //   address: "Port Harcourt, Nigeria",
    // },
    //  {
    //   id: 7,
    //   image: "/images/oPast-projects6.png",
    //   subtitle: "Event Booking System",
    //   owner: "Williams Akpan",
    //   address: "Akwa Ibom, Nigeria",
    // },
    {
      id: 8,
      image: "/images/o8.png",
      subtitle: "1kVA Solar System Installation",
      owner: "Susan Akpan",
      address: "Akwa Ibom, Nigeria",
    },
  ];
return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8  lg:py-11 text-center">Past Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-20 gap-8 px-4 sm:px-8 lg:px-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition border-2 border-amber-900"
          >
            <img
              src={project.image}
              alt={project.subtitle}
              className="w-full rounded-xl mb-4 object-cover"
              // Optionally add aspect ratio if you enable the plugin:
              // className="w-full aspect-w-16 aspect-h-9 rounded-xl mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{project.subtitle}</h2>
            <p className="text-gray-700"><strong>Owner:</strong> {project.owner}</p>
            <p className="text-gray-500"><strong>Address:</strong> {project.address}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
//   return (
//     <main className="min-h-screen p-8 bg-gray-50">
//       <h1 className="text-3xl font-bold mb-8 text-center">Past Projects</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 px-52 gap-20 ">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition  border-2 border-amber-900"
//           >
//             <img
//               src={project.image}
//               alt={project.subtitle}
//               className="w-full h-40  object-cover rounded-xl mb-4 "
//             />
//             <h2 className="text-xl font-semibold text-blue-600 mb-2">{project.subtitle}</h2>
//             <p className="text-gray-700"><strong>Owner:</strong> {project.owner}</p>
//             <p className="text-gray-500"><strong>Address:</strong> {project.address}</p>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
