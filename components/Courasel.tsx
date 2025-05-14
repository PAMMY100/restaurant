// 'use client';
// import React, { useState, useEffect, useCallback, useRef, ReactNode } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';


// interface CarouselProps {
//   autoplaySpeed?: number; // in milliseconds
//   showArrows?: boolean;
// }

// const Courasel = ({
//   autoplaySpeed = 3000,
//   showArrows = true,
// } : CarouselProps, {children}: {children: ReactNode}) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const autoplayRef = useRef<NodeJS.Timeout | null>(null);

//   // Handle slide selection and index tracking
//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   // Setup autoplay
//   const startAutoplay = useCallback(() => {
//     if (isPaused || !emblaApi) return;
    
//     // Clear any existing interval
//     if (autoplayRef.current) {
//       clearInterval(autoplayRef.current);
//     }
    
//     autoplayRef.current = setInterval(() => {
//       if (emblaApi && !isPaused) {
//         emblaApi.scrollNext();
//       }
//     }, autoplaySpeed);
//   }, [emblaApi, autoplaySpeed, isPaused]);

//   // Navigate to specific slide
//   const scrollTo = useCallback(
//     (index: number) => {
//       if (emblaApi) emblaApi.scrollTo(index);
//     },
//     [emblaApi]
//   );

//   // Initialize carousel and autoplay
//   useEffect(() => {
//     if (emblaApi) {
//       emblaApi.on('select', onSelect);
//       startAutoplay();
//       onSelect();
//     }
    
//     return () => {
//       if (emblaApi) emblaApi.off('select', onSelect);
//       if (autoplayRef.current) clearInterval(autoplayRef.current);
//     };
//   }, [emblaApi, onSelect, startAutoplay]);

//   // Handle pause/resume on hover
//   const handleMouseEnter = () => {
//     setIsPaused(true);
//     if (autoplayRef.current) {
//       clearInterval(autoplayRef.current);
//     }
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//     startAutoplay();
//   };

//   // Handle next/previous slide navigation
//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   return (
//     <div className="relative w-full">
//       <div 
//         className="overflow-hidden w-full"
//         ref={emblaRef}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onFocus={handleMouseEnter}
//         onBlur={handleMouseLeave}
//       >
//         <div className="flex justify-between gap-6 space-x-10 select-none bg-white">
//           {children}
//         </div>
//       </div>

//       {showArrows && (
//         <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4">
//           <button 
//             className="bg-white/70 hover:bg-white/90 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10 shadow-md"
//             onClick={scrollPrev}
//             aria-label="Previous slide"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <button 
//             className="bg-white/70 hover:bg-white/90 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10 shadow-md"
//             onClick={scrollNext}
//             aria-label="Next slide"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       )}

//       {/* {showDots && (
//         <div className="flex justify-center py-3 gap-2">
//           {data.map((_, index) => (
//             <button
//               key={index}
//               className={`w-2.5 h-2.5 rounded-full ${index === selectedIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
//               onClick={() => scrollTo(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default Courasel;

'use client';
import React, { useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface CarouselProps {
  autoplaySpeed?: number; // in milliseconds
  showArrows?: boolean;
  children: ReactNode;
}

const Carousel = ({
  autoplaySpeed = 3000,
  showArrows = true,
  children,
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    if (isPaused || !emblaApi) return;

    autoplayRef.current = setInterval(() => {
      if (emblaApi && !isPaused) {
        emblaApi.scrollNext();
      }
    }, autoplaySpeed);
  }, [emblaApi, autoplaySpeed, isPaused]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      startAutoplay();
      onSelect();
    }

    return () => {
      if (emblaApi) emblaApi.off('select', onSelect);
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, onSelect, startAutoplay]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoplay();
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      <div
        className="overflow-hidden w-full"
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      >
        <div className="flex select-none space-x-6 px-4">
          {children}
        </div>
      </div>

      {showArrows && (
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4">
          <button
            className="bg-white/70 hover:bg-white/90 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10 shadow-md"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="bg-white/70 hover:bg-white/90 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10 shadow-md"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;