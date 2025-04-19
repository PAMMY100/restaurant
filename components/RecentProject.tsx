import Image from "next/image"
import { corp } from "@/public/assets/Icon"


const RecentProject = () => {

  return (
    <div className="h-[900px] relative">
      <div className="absolute left-10 top-5">
        <h1 className="text-[56px] mb-5">Check Our Recent Project</h1>
        <p className="text-[24px] w-[691px] h-[22px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum ratione placeat suscipit? Vitae doloribus iure, accusantium dolorem ullam distinctio aperiam! Quasi facilis maxime tempora in voluptates laboriosam eveniet id est?</p>
      </div>
      <div className="w-[1100px] h-[936px] absolute -bottom-[20%] right-10 -z-10">
        <Image src={corp} alt="a white house"/>
      </div>
    </div>
  )
}

export default RecentProject