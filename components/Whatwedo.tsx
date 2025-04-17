import Image from 'next/image'
import { webPlanning, planning, marketing } from '@/public/assets/Icon'


const Whatwedo = () => {
  return (
    <div className='mt-20 bg-gray-100 p-5'>
      <h1 className='text-[56px] mb-12'>What We Do</h1>
      <div className='flex space-x-5 p-10 text-center'>
        <div className='flex flex-col items-center gap-6'>
          <div className='w-[326px] h-[326px] rounded-[166px] bg-[#EDEDED] shadow-inner flex justify-center items-center mb-10'>
            <div className='w-[214px] h-[214px] rounded-[107px] bg-[#EDEDED] shadow-[6px_6px_10px_rgba(0,0,0,0.1),_-6px_-6px_10px_rgba(255,255,255,0.7)] flex justify-center items-center'>
              <Image src={planning} alt='3D planning'/>
            </div>
          </div>
          <h1 className='text-[28px] font-bold'>3D Planning</h1>
          <p className='text-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. unde. Animi.</p>
        </div>
        <div className='flex flex-col items-center gap-6'>
          <div className='w-[326px] h-[326px] rounded-[166px] bg-[#EDEDED] shadow-inner flex justify-center items-center mb-10'>
            <div className='w-[214px] h-[214px] rounded-[107px] bg-[#EDEDED] shadow-[6px_6px_10px_rgba(0,0,0,0.1),_-6px_-6px_10px_rgba(255,255,255,0.7)] flex justify-center items-center'>
              <Image src={webPlanning} alt='Web Platform'/>
            </div>
          </div>
          <h1 className='text-[28px] font-bold'>Web Platform</h1>
          <p className='text-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit amet unde. Animi.</p>
        </div>
        <div className='flex flex-col items-center gap-6'>
          <div className='w-[326px] h-[326px] rounded-[166px] bg-[#EDEDED] shadow-inner flex justify-center items-center mb-10'>
            <div className='w-[214px] h-[214px] rounded-[107px] bg-[#EDEDED] shadow-[6px_6px_10px_rgba(0,0,0,0.1),_-6px_-6px_10px_rgba(255,255,255,0.7)] flex justify-center items-center'>
              <Image src={marketing} alt='Marketing'/>
            </div>
          </div>
          <h1 className='text-[28px] font-bold'>Marketing</h1>
          <p className='text-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit amet unde. Animi.</p>
        </div>
      </div>
    </div>
  )
}

export default Whatwedo