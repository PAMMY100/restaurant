import Image from "next/image";
import { footerImg, footerLogo, footArr } from "@/public/assets/Icon";


const Contact = () => {

  return (
    <div className="flex h-[1080px]">
      <div className="w-[60%] h-full">
        <Image src={footerImg} alt="footer image" className="w-[100%] h-full"/>
      </div>
      <div className="bg-[#2D2D2D] w-[50%] p-20">
        <div className="flex flex-col gap-10">
          <Image src={footerLogo} alt="zeal image"/>
          <p className="text-[24px] text-[#E0E0E0]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat in  maiores doloribus! Nihil, provident?</p>
        </div>
        <form action="" className="flex flex-col gap-12 h-fit mt-10">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="bg-[#2D2D2D] w-[634px] h-[91px] rounded-[14px] p-5 text-[26px] text-white outline-none focus:outline-none shadow-[inset_2px_-6px_8px_rgba(0,0,0,0.5)]" 
            />
          <input 
            type="email" 
            name="email" placeholder="yourmailaddressplease@gmail.com"
            className="bg-[#2D2D2D] w-[634px] h-[91px] rounded-[14px] p-5 text-[26px] text-white outline-none focus:outline-none shadow-[inset_2px_-6px_8px_rgba(0,0,0,0.5)]"
          />
          <button className="bg-[#2D2D2D] text-[#12B7B6] text-[26px] h-[107px] w-[457px] flex gap-7 rounded-[14px] p-10 items-center drop-shadow-2xl inset-ring-[#2D2D2D] hover:inset-ring-[#12B7B6] cursor-pointer">Get in Touch with us <Image src={footArr} alt="right arrow"/></button>
        </form>
      </div>
    </div>
  )
}

export default Contact