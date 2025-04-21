import { ethics, innovation, collaboration, quality, sustainibility } from "@/public/assets/Icon"
import { div } from "framer-motion/client";
import Image from "next/image";

type AttElement = {
  title: string;
  img: string;
}

const att: AttElement[] = [
  { title: "Ethics", img: ethics },
  { title: "Innovation", img: innovation },
  {title: "Collaboration", img: collaboration},
  {title: "Quality & Comfort", img: quality},
  {title: "Sustainibility", img: sustainibility}
]

const Zeal = () => {

  return (
    <div className="bg-[#313131] text-white h-[578px] mt-10 p-14 mb-10">
      <div className="mb-14">
        <h1 className="text-[56px] mb-10">What does Zeal stand for</h1>
        <p className="text-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis atque expedita.</p>
      </div>
      <div className="flex justify-around items-center space-x-9 mt-36">
        {att.map((el, i) => (
          <div key={i} className="flex flex-col justify-center items-center gap-5">
            <Image src={el.img} alt={el.title}/>
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Zeal