import { trophy, givingHand, team } from "@/public/assets/Icon"
import Image from "next/image";

type ObjectiveContent = {
  img: string;
  details: string;
}

const obj: ObjectiveContent[] = [
  {img: trophy, details: "Introducing to you a UI & UX focused website with a cutting edge technology as a platform for digital marketing and lead generation."},
  {img: givingHand, details: "Establishing the first stepping stone in the micro markets of Navi Mumbai, and later leaving footprints as a standard bearer in the micro markets of Mumbai. We strive to always have a dedicated focus on the consumer's requirements and expectations"},
  {img: team, details: "We believe in long term orientation with our diversified business model thus making us stand out in the industry"}
]

const Objectives = () => {

  return (
    <div className="mt-4 p-4">
      <h1 className="text-[56px]">Zeal's Objectives</h1>
      <div className="mt-16 flex flex-col justify-center gap-4">
        {obj.map((item) => (
          <div className="flex gap-10 justify-center items-center w-[80%]" key={item.details}>
            <div className="w-[144px] h-[144px] rounded-[166px] bg-[#EDEDED] flex justify-center items-center shadow-inner">
              <Image src={item.img} alt={`${item.img} icon`} width={84} height={77}/>
            </div>
            <p className="w-[60%]">{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Objectives