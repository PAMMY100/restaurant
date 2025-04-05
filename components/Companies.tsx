'use client';
import React from 'react';
import Image from 'next/image';
import Courasel from './Courasel';
import { lodha, prestige, brigade, sobha } from '@/public/assets/Icon';

const data: CompanyData[] = [
  {
    id: 1,
    logo: lodha,
    name: 'Lodha Group',
    experience: '35+ years of experience',
    project: '270+ Project Done'
  },
  {
    id: 2,
    logo: prestige,
    name: 'Prestige Group',
    experience: '40+ years of experience',
    project: '140+ Project Done'
  },
  {
    id: 3,
    logo: brigade,
    name: 'Brigade Group',
    experience: '35+ years of experience',
    project: '180+ Project Done'
  },
  {
    id: 4,
    logo: sobha,
    name: 'Sobha Developers',
    experience: '35+ years of experience',
    project: '150+ Project Done'
  }
]


const Companies: React.FC = () => {
  // Example slides - you can replace with your own content
  const slides = [
    <div key="slide1" className="relative h-96 flex items-center justify-center">
      <div className="absolute inset-0">
        <Image 
          src={lodha}
          alt="Slide 1" 
          layout="fill" 
          objectFit="cover"
          priority
        />
      </div>
      <h2 className="absolute bottom-8 left-8 text-white bg-black/60 px-5 py-3 m-0 rounded">
        First Slide
      </h2>
    </div>,
    <div key="slide2" className="relative h-96 flex items-center justify-center">
      <div className="absolute inset-0">
        <Image 
          src={prestige} 
          alt="Slide 2" 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <h2 className="absolute bottom-8 left-8 text-white bg-black/60 px-5 py-3 m-0 rounded">
        Second Slide
      </h2>
    </div>,
    <div key="slide3" className="relative h-96 flex items-center justify-center">
      <div className="absolute inset-0">
        <Image 
          src={brigade}
          alt="Slide 3" 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <h2 className="absolute bottom-8 left-8 text-white bg-black/60 px-5 py-3 m-0 rounded">
        Third Slide
      </h2>
    </div>,
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Showcase</h1>
      
      <div className="max-w-4xl mx-auto my-10">
        <Courasel
          data={data}
          autoplaySpeed={4000}
          showDots={true}
          showArrows={true}
        />
      </div>
    </div>
  );
};

export default Companies;