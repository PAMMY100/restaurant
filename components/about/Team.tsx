import { founder, accountant, architech, developer, designer, coFounder, cto } from "@/public/assets/Icon"
import Carousel from "../Courasel"

const team = [
  {
    name: "Bhavik Jonathan",
    position: "Founder & CEO",
    pic: founder
  },
  {
    name: "Ali Michael Doe",
    position: "Co-Founder, CBO",
    pic: coFounder
  },
  {
    name: "Avnish Hyuga",
    position: "Lead Dev, CTO",
    pic: cto
  },
  {
    name: "Raul Kahn",
    position: "Designer",
    pic: designer
  },
  {
    name: "Blan Tat",
    position: "Accountant",
    pic: accountant
  },

  {
    name: "Suss Bank",
    position: "Architect",
    pic: architech
  },

]

const Team = () => {


  return (
    <div className="p-10">
      <h1 className="text-[56px] mb-10">Our Team</h1>
        <Carousel>
      {
        team.map((item, index) => (
          <div key={item.name}  className="flex-shrink-0 flex flex-col items-center justify-center w-[300px] sm:w-[360px] md:w-[430px] h-[540px] sm:h-[592px] mx-4 rounded-[30px] shadow-2xl mr-20">
            <img src={item.pic.src} alt={`${item.name} picture`} className="w-[100%] h-[430px] object-cover" />
              <h1 className="text-[32px] font-bold">{item.name}</h1>
              <p className="text-[20px]">{item.position}</p>
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Team