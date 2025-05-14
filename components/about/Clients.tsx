import { lodha, prestige, brigade, sobha } from "@/public/assets/Icon"
import Image from "next/image"

const images = [lodha, prestige, brigade, sobha]

const Clients = () => {

  return (
    <div>
        <h1 className="text-[56px]">Our Clients</h1>
        <div className="flex justify-center items-center m-32 space-x-32">
        {images.map((item, index) => (
          <div key={index} >
            <Image src={item} alt={`${item} logo`} className="w-[200px] h-[100px] object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients