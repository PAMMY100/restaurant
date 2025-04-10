'use client'
import { useState } from "react";
import { Check } from "lucide-react";
import { plus, minus, arrLeft, arrRight, search, checker } from "@/public/assets/Icon";
import Image from "next/image";

function Filter() {
  const [isOn, setIsOn] = useState(true)

  return (
    <div className="w-[95%] h-[312px] rounded-[45px] flex gap-3 justify-around items-center text-[22px] font-bold text-[#545454] bg-[#F9F9F9] shadow-lg p-5 mx-auto">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <input type="text" placeholder="Search, Property, Name, Locality, Developer" className="w-[903px] h-[82px] rounded-[42.5px] bg-[#F9F9F9] p-4 outline-none focus:outline-0 shadow-[inset_0_-3px_6px_rgba(0,0,0,0.1)] "/>
          <div className="flex gap-2 items-center">
            <span>Bedrooms</span>
            <div className="flex justify-between items-center w-[273.99px] h-[82.88px] rounded-[42.5px] bg-[#F9F9F9] shadow-inner">
              <div className="w-[76.05px] h-[76.05px] rounded-[166px] bg-[#F3F3F3] flex justify-center items-center"><Image src={minus} alt="minus icon"/></div>
              <span>2</span>
              <div className="w-[76.05px] h-[76.05px] rounded-[166px] bg-[#F3F3F3] flex justify-center items-center"><Image src={plus} alt="plus icon"/></div>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5">
          <div className="flex justify-around space-x-12 gap-2 items-center">
            <span>Price Segment</span>
            <div className="w-[361.74px] h-[82.88px] rounded-[42.5px] bg-[#F9F9F9] flex justify-between items-center shadow-inner">
              <div className="w-[76.05px] h-[76.05px] rounded-[166px] bg-[#F3F3F3] flex justify-center items-center"><Image src={arrLeft} alt="arrow left Icon"/></div>
              <span>Affordable</span>
              <div className="w-[76.05px] h-[76.05px] rounded-[166px] bg-[#F3F3F3] flex justify-center items-center"><Image src={arrRight} alt="arrow right Icon"/></div>
            </div>
            <div className="flex gap-3 items-center">
              <span>Ready to Move</span>
              <div
                onClick={() => setIsOn(!isOn)}
                className={`w-[169px] h-[82.88px] rounded-[42.5px] flex items-center px-1 transition-all duration-300 cursor-pointer
                  ${isOn ? "bg-gradient-to-r from-[#e6e6e6] to-[#ffffff]" : "bg-gray-300"}
                  shadow-inner`}
              >
                <div
                  className={`w-[76.05px] h-[76.05px] rounded-[166px] bg-[#F3F3F3] shadow-md transform transition-transform duration-300 flex items-center justify-center
                    ${isOn ? "translate-x-[113%]" : "translate-x-0"}`}
                >
                  {isOn ? <Image src={checker} alt="checker icon" /> : <Check size={24} className="text-gray-400" />}
                </div>
              </div>
            </div>
            <div className="h-[82.88px] w-[273.99px] bg-[#F9F9F9] rounded-[42.5px] shadow-md text-center p-5">
              <span className="text-[#CDCDCD]">Advance Filters</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[128.71px] h-[128.71px] rounded-full bg-[#F3F3F3] shadow-inner cursor-pointer flex justify-center items-center">
        <Image src={search} alt="Search Icon" className="w-[47.32px] h-[51.76px] cursor-pointer"/>
      </div>
    </div>
  )
}

export default Filter