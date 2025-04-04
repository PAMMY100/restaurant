'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import arrowDown from '@/public/assets/icons/arrow-down.svg'

interface CarouselProps {
  data: CompanyData[];
  autoplaySpeed?: number; // in milliseconds
  showDots?: boolean;
  showArrows?: boolean;
}

const Courasel: React.FC<CarouselProps> = ({
  data,
  autoplaySpeed = 3000,
  showDots = true,
  showArrows = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Handle slide selection and index tracking
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Setup autoplay
  const startAutoplay = useCallback(() => {
    if (isPaused || !emblaApi) return;
    
    // Clear any existing interval
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    autoplayRef.current = setInterval(() => {
      if (emblaApi && !isPaused) {
        emblaApi.scrollNext();
      }
    }, autoplaySpeed);
  }, [emblaApi, autoplaySpeed, isPaused]);

  // Navigate to specific slide
  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Initialize carousel and autoplay
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

  // Handle pause/resume on hover
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

  // Handle next/previous slide navigation
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
        <div className="flex justify-between gap-6 space-x-10 select-none bg-white">
          {data.map((card, index) => (
            <div className="flex flex-col justify-center space-y-8 w-[430px] h-[592px] rounded-[43px] p-5 bg-[#F3F3F3] drop-shadow-lg" key={index}>
                <Image src={card.logo} alt={card.name} className={index === 0 ? 'my-16 mx-auto' : 'mx-auto'}/>
                <div className='space-y-3'>
                  <h1 className='text-[26px] font-bold'>{card.name}</h1>
                  <p className='text-[26px]'>{card.experience}</p>
                  <p className='font-bold text-[22px] text-[#12B7B6]'>{card.project}</p>
                </div>
                <button className='flex justify-between items-center pl-10 gap-3 w-[328px] h-[85px] font-bold text-[22px] text-[#12B7B6] rounded-[42.5px] bg-[#F9F9F9]'>
                  Check profile 
                  <div className='w-[85px] h-[85px] rounded-[42.5px] items-center bg-[#F9F9F9] shadow-inner flex justify-center'>
                    <Image src={arrowDown} alt='arrow down' className='h-[24px] items-center'/>
                  </div>
                </button>
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4">
          <button 
            className="bg-white/70 hover:bg-white/90 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10 shadow-md"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="bg-white/70 hover:bg-white/90 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10 shadow-md"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {showDots && (
        <div className="flex justify-center py-3 gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${index === selectedIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Courasel;