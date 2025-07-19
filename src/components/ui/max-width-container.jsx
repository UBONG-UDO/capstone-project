import React from 'react'

export default function MaxWidthContainer({children, className}) {
  return (
    <div className={`max-w-[1870px] mx-auto ${className}`}>
        {children}
    </div>
)}


// "use client";    //chatGPT 18/7/2025
// import React from "react";

// export default function MaxWidthContainer({ children }) {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       {children}
//     </div>
//   );
// }
