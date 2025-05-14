import Image from "next/image"
import arrowDown from '@/public/assets/icons/arrow-down.svg'
import Courasel from "./Courasel";

interface Productcard {
  data: CompanyData[];
  autoplaySpeed?: number; // in milliseconds
  showArrows?: boolean;
}

const ProductCard = ({data, autoplaySpeed, showArrows}: Productcard) => {

  return (
    <Courasel autoplaySpeed={autoplaySpeed} showArrows={showArrows}>
      {   data.map((card, index) => (
            <div className="flex flex-col justify-center space-y-8 w-[430px] h-[592px] rounded-[43px] p-5 bg-[#F3F3F3] drop-shadow-lg" key={index}>
                <Image src={card.logo} alt={card.name} className={index === 0 ? 'my-16 mx-auto' : 'mx-auto'}/>
                <div className='space-y-3'>
                  <h1 className='text-[26px] font-bold'>{card.name}</h1>
                  <p className='text-[26px]'>{card.experience}</p>
                  <p className='font-bold text-[22px] text-[#12B7B6]'>{card.project}</p>
                </div>
                <button className='flex justify-between items-center pl-10 gap-3 w-[328px] h-[85px] font-bold text-[22px] text-[#12B7B6] rounded-[42.5px] bg-[#F9F9F9]'>
                  Check profile 
                  <div className='w-[85px] h-[85px] rounded-[42.5px] items-center bg-[#F9F9F9] shadow-inner flex justify-center'>
                    <Image src={arrowDown} alt='arrow down' className='h-[24px] items-center'/>
                  </div>
                </button>
            </div>
          ))}
    </Courasel>
  )
}

export default ProductCard