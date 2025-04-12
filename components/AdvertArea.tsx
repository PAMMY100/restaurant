"use client"
import { lodhaMiracle, monaco, greece, uk, usa } from "@/public/assets/Icon"
import Image from "next/image"
import { useEffect, useState } from "react"

const data: AdvertData[] = [
  {
    id: 1,
    name: "Lodha Miracles",
    agent: "Aashiyana",
    image: lodhaMiracle,
    location: "Andheri East, Mumbai",
    price: "₹ 450k - 680k"
  },
  {
    id: 2,
    name: "Mendez Hoza",
    agent: "Tito",
    image: monaco,
    location: "Monaco",
    price: "₹ 450k - 680k"
  },
  {
    id: 3,
    name: "Santorini Lounge",
    agent: "Aleesha",
    image: greece,
    location: "Santorini, Greece",
    price: "₹ 450k - 680k"
  },
  {
    id: 4,
    name: "Davidson House",
    agent: "Peter",
    image: uk,
    location: "London East, London",
    price: "₹ 450k - 680k"
  },
  {
    id: 5,
    name: "De angels",
    agent: "Queen",
    image: usa,
    location: "California, USA",
    price: "₹ 450k - 680k"
  }
]
const AdvertArea = () => {
  const [bg, setBg] = useState<AdvertData>(data[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleBgChange()
    }, 5000)

    return () => {
      clearInterval(timer);
    }
  }, [])

  const handleBgChange = () => {
    const randomIndex = Math.floor(Math.random() * data.length)
    setBg(data[randomIndex])
  }


  return (
    // <div 
    //   className="w-full h-[1080px] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center relative"
    //   style={{ backgroundImage: `url(${bg.image})` }}
    // >
    //   {/* Add a fallback for background image */}
    //   {!bg.image && (
    //     <div className="absolute inset-0 bg-gray-200" />
    //   )}
      
    //   <div className="bg-white/80 p-6 rounded-lg shadow-lg text-center mb-8">
    //     <div className="text-lg font-medium text-blue-600">{bg.agent}</div>
    //     <div className="text-2xl font-bold">{bg.name}</div>
    //   </div>
      
    //   <div className="bg-white/80 p-6 rounded-lg shadow-lg max-w-md">
    //     <h2 className="text-3xl font-bold mb-2">{bg.name}</h2>
    //     <p className="text-gray-600 mb-1">{bg.location}</p>
    //     <p className="text-green-600 font-semibold text-xl mb-4">{bg.price}</p>
    //     <div className="flex gap-3 justify-center">
    //       <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full">1BHK</span>
    //       <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full">2BHK</span>
    //       <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full">Rental</span>
    //     </div>
    //   </div>
    // </div>

      <div className="relative w-full h-[1080px] mt-10">
        {bg.image && (
          <Image
            src={bg.image}
            alt={bg.name}
            fill
            className="object-cover relative -z-10 "
            priority
          />
        )}
        <div className="flex">
          <div className="flex shadow-lg text-white text-center mb-8">
              <div className="bg-[#000000] text-lg font-bold  w-[308px] h-[1080px] flex flex-col justify-end opacity-[70%] text-[30px] pb-14">{bg.agent}</div>
              <div className="bg-[#000000] text-2xl font-bold w-[307px] h-[1080px] flex flex-col justify-end opacity-[80%] text-[30px] pb-14">{bg.name}</div>
            </div>
          
          <div className="p-20 w-full h-[1080px] text-white bg-[#000000]  opacity-[60%]">
            <h2 className="text-[35px] leading-16 font-bold mb-2">{bg.name}</h2>
            <p className="font-semibold text-[22px] leading-12 mb-1">{bg.location}</p>
            <p className=" font-semibold text-[22px] mb-4">{bg.price}</p>
            <div className="flex gap-3">
              <span className="px-4 py-1 border-2 rounded-full">1BHK</span>
              <span className="px-4 py-1 border-2  rounded-full">2BHK</span>
              <span className="px-4 py-1 border-2 rounded-full">Rental</span>
            </div>
          </div>
        </div>
     </div>
  )
}

export default AdvertArea