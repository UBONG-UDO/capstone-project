// "use client";
// // components/Carousel.jsx

// import React, { useState, useRef, useEffect } from 'react';

// const Carousel = ({ images, autoplayInterval = 3000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef(null);

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToImage = (index) => {
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollTo({
//         left: currentIndex * carouselRef.current.offsetWidth,
//         behavior: 'smooth',
//       });
//     }
//   }, [currentIndex]);

//   // useEffect(() => {
//   //   let intervalId;
//   //   const startAutoplay = () => {
//   //     intervalId = setInterval(() => {
//   //       goToNext();
//   //     }, autoplayInterval);
//   //   };


// useEffect(() => {
//   const intervalId = setInterval(() => {
//     goToNext();
//   }, autoplayInterval);

//   return () => clearInterval(intervalId);
// }, [autoplayInterval]);


//   //   startAutoplay();
//   //   return () => clearInterval(intervalId);
//   // }, [autoplayInterval, currentIndex]); // You can adjust dependencies as needed

//   return (
//     <div className="relative mx-auto w-full max-w-full overflow-hidden rounded-lg shadow-md">
//       <div className="flex transition-transform duration-500 ease-in-out" ref={carouselRef}>
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Carousel Image ${index + 1}`}
//             className="h-full w-full flex-shrink-0 object-cover md:h-72 lg:h-96"
//             loading="lazy"
//           />
//         ))}
//       </div>
//       {/* Previous Button */}
//       <button
//         onClick={goToPrevious}
//         className="bg-opacity-50 absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-black p-2 text-white opacity-75 hover:opacity-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//         aria-label="Previous"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
//       {/* Next Button */}
//       <button
//         onClick={goToNext}
//         className="bg-opacity-50 absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-black p-2 text-white opacity-75 hover:opacity-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//         aria-label="Next"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//       {/* Dots */}
//       <div className="absolute bottom-2 left-0 flex w-full justify-center space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToImage(index)}
//             className={`h-3 w-3 rounded-full transition-colors duration-300 ${
//               currentIndex === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-500'
//             }`}
//             aria-label={`Go to image ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
