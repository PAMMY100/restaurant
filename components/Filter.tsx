'use client'
import { useState } from "react";
import { Check } from "lucide-react";
import { plus, minus, arrLeft, arrRight, search } from "@/public/assets/Icon";
import Image from "next/image";

function Filter() {
  const [isOn, setIsOn] = useState(true)

  return (
    <div className="w-full h-[312px] rounded-[45px] flex gap-3 align-middle">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <input type="text" placeholder="Search, Property, Name, Locality, Developer" className="w-[903px] h-[82px] rounded-[42.5px] bg-[#F9F9F9] p-4"/>
          <div className="flex gap-2 items-center">
            <span>Bedrooms</span>
            <div className="flex justify-between items-center w-[273.99px] h-[82.88px] rounded-[42.5px] bg-[#F9F9F9]">
              <div className="w-[76.05px] h-[76.05px] rounded-[166px] bg-[#F3F3F3] flex justify-center items-center"><Image src={minus} alt="minus icon"/></div>
              <span>2</span>
              <div className="w-[76.05px] h-[76.05px] rounded-[166px] bg-[#F3F3F3] flex justify-center items-center"><Image src={plus} alt="plus icon"/></div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <div className="flex justify-around gap-2 items-center">
            <span>Price Segment</span>
            <div>
              <div><Image src={arrLeft} alt="arrow left Icon"/></div>
              <p>Affordable</p>
              <div><Image src={arrRight} alt="arrow right Icon"/></div>
            </div>
            <div>
              <span>Ready to Move</span>
              <div
                onClick={() => setIsOn(!isOn)}
                className={`w-14 h-7 rounded-full flex items-center px-1 transition-all duration-300 cursor-pointer
                  ${isOn ? "bg-gradient-to-r from-[#e6e6e6] to-[#ffffff]" : "bg-gray-300"}
                  shadow-inner`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center
                    ${isOn ? "translate-x-7" : "translate-x-0"}`}
                >
                  {isOn && <Check size={14} className="text-gray-400" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button><Image src={search} alt="Search Icon"/></button>
      </div>
    </div>
  )
}

export default Filter