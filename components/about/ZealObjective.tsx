import { vision, mission, goal } from "@/public/assets/Icon"
import Image from "next/image";

type ObjElement = {
  title: string;
  img: string;
  content: string;
}

const objective: ObjElement[] = [
  {
    title: "Vision", 
    img: vision, 
    content: '“To redefine real estate buying experience at the tip of your fingers by providing consumer focus web platform.”'
  },
  {
    title: "Mission",
    img: mission,
    content: '"To collaborate with skilled professionals from multiple verticals of the Indian real estate sector providing home buyers a convenient & anchored experience.”'
  },
  {
    title: "Goal",
    img: goal,
    content: '“ Establish ourselves as a reliable medium between the demand side and the supply side of the real estate industry ” one-stop'
  }
]

const ZealObjective = () => {

  return (
    <div className="flex justify-around gap-10 items-center p-20">
        {
          objective.map((el) => (
            <div key={el.title} className="w-[446px] h-[626px] rounded-[43px] bg-[#F3F3F3] flex flex-col p-5 gap-7 justify-center items-center shadow-xl">
              <div className="w-[264px] h-[264px] rounded-[166px] bg-[#EDEDED] shadow-inner outline-none flex justify-center items-center">
                <Image src={el.img} alt={el.title} />
              </div>
              <h1 className="text-[56px] text-[#1F1F1F]">{el.title}</h1>
              <p className="text-[20px] font-semibold text-[#434343] text-center">{el.content}</p>
            </div>
          ))
        }
    </div>
  )
}

export default ZealObjective