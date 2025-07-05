// pages/shop.js
'use client';
import React, { useState } from 'react';
import Products from '../products.jsx/page';
import MaxWidthContainer from '@/components/ui/max-width-container';

const categoryLinks = [
  { id: 'inverter', name: 'Inverter' },
  { id: 'battery', name: 'Battery' },
  { id: 'solar-panel', name: 'Solar Panel' },
  { id: 'charge-controller', name: 'Charge Controller' },
  { id: 'dc-circuit-breaker', name: 'DC Circuit Breaker' },
  { id: 'dc-cable', name: 'DC Cable' },
  { id: 'battery-rack', name: 'Battery Rack' },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
{/* <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About UB Solar
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Leading the renewable energy revolution with premium solar equipment and exceptional service since 2010
            </p>
          </div>
        </div>
      </section> */}

  return (
    <div>
         <div className='pb-12'>
        <section className="bg-blue-900 text-white py-15">
          <div>
            <p className='text-5xl font-black flex justify-center pb-8'>Shop</p>
            <ul className="lg:flex lg:justify-center sm:flex sm:justify-center text-base font-bold space-x-14 hidden">
              {categoryLinks.map((cat) => (
                <li key={cat.id}>
                  <button
                    className={`flex focus:outline-none ${selectedCategory === cat.id ? 'underline' : ''}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className={`flex focus:outline-none ${selectedCategory === '' ? 'underline' : ''}`}
                  onClick={() => setSelectedCategory('')}
                >
                  All
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <MaxWidthContainer>
      <Products selectedCategory={selectedCategory} />
       </MaxWidthContainer>
    </div>
  );
}






// import React from 'react';
// import Products from '../products.jsx/page';
// import Link from 'next/link';

// export default function ProductsPage() {
//   return (
//     <div>
//       <div className='pb-12'>
//           <section className="bg-blue-900 text-white py-15">
//         <div>
//  <ul className="flex justify-center text-base font-bold space-x-14">
//         <li>
//         <Link href=""><span className=''>Inverter</span></Link>
//         </li>
//         <li>
//         <Link href=""><span className='flex'>Battery</span></Link>
//         </li>
//         <li>
//         <Link href=""><span className='flex'>Solar Panel</span></Link>
//         </li>
//         <li>
//         <Link href=""><span className='flex'>Charge Controller</span></Link>
//         </li>
//          <li>
//         <Link href=""><span className='flex'>DC Circuit Breaker</span></Link>
//         </li>
//          <li>
//         <Link href=""><span className='flex'>DC Cable</span></Link>
//         </li>
//          <li>
//         <Link href=""><span className='flex'>Battery Rack</span></Link>
//         </li>
// 			</ul>
//           </div>
//       </section>
//       </div>
//       <Products />
//     </div>
    
//   );
// }
