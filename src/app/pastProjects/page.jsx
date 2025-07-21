"use client";
import MaxWidthContainer from '@/components/ui/max-width-container';
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
    {
      id: 8,
      image: "/images/o8.png",
      subtitle: "1kVA Solar System Installation",
      owner: "Susan Akpan",
      address: "Akwa Ibom, Nigeria",
    },
  ];
return (
  <div className='min-h-screen mt-[32px]'>
    <main className="min-h-screen  bg-gray-50 py-10">
    <section className="bg-gray-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Past Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Our practical problem solving skill is leading the renewable energy revolution with premium solar equipment and exceptional service.
            </p>
          </div>
        </div>
      </section>
    <MaxWidthContainer>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-20 lg:py-12 gap-8 py-10 px-4 sm:px-8 sm:py-11 lg:px-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p- rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.subtitle}
              className="w-full rounded-xl mb-4 object-cover"
            />
            <div className='text-center'>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{project.subtitle}</h2>
            <p className="text-gray-700"><strong>Owner:</strong> {project.owner}</p>
            <p className="text-gray-500"><strong>Address:</strong> {project.address}</p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthContainer>
    </main>
    </div>
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
