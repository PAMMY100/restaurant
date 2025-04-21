import { abtHero } from "@/public/assets/Icon"
import Image from "next/image"

const AboutHero = () => {

  return (
    <div className="flex flex-col items-center">
      <div className="p-25">
        <Image src={abtHero} alt="about image" className="w-[1212.78px] h-[615px]"/>
      </div>
      <div className="w-[1519px] h-[139px] flex justify-around items-center p-5 bg-[#F3F3F3] shadow-[6px_6px_10px_rgba(0,0,0,0.1),_-6px_-6px_10px_rgba(255,255,255,0.7)] text-[26px] font-bold rounded-[30px] text-[#646464]">
        <div>
          <p className="text-[#12B7B6]">About Us </p>
        </div>
        <div>
          <p className="border-[#C2C2C2] border-r-3 border-l-3 w-[441px] h-[49px] text-center">Services</p>
        </div>
        <div>
          <p>Pricing</p>
        </div>
      </div>
      <div className="text-[#434343] text-[46px] space-y-7 p-5 mt-10">
        <div>
          <h2 className="text-[#12B7B6]">Zeal</h2>
          <p>/zi:l/</p>
        </div>
        <p className="text-[#12B7B6]">noun</p>
        <p>Great energy or enthusiasm in pursuit of a cause or an objective.
        </p>
      </div>
    </div>
  )
}

export default AboutHero