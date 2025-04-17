import Image from "next/image"
import { corp } from "@/public/assets/Icon"


const RecentProject = () => {

  return (
    <div className="min-h-screen">
      <div>
        <h1>Check Our Recent Project</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum ratione placeat suscipit? Vitae doloribus iure, accusantium dolorem ullam distinctio aperiam! Quasi facilis maxime tempora in voluptates laboriosam eveniet id est?</p>
      </div>
      <div>
        <Image src={corp} alt="a white house"/>
      </div>
    </div>
  )
}

export default RecentProject