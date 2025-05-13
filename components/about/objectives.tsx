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

const objectives = () => {

  return (
    <div>
      <h1>Zeal's Objectives</h1>
      <div>
        {obj.map((item) => (
          <div>
            <div>
              <Image src={item.img} alt={`${item.img} icon`}/>
            </div>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default objectives