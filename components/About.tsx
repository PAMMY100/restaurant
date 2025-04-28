import React from 'react'
import { aboutusBG, downarrow } from '@/public/assets/Icon'
import Image from 'next/image'

const About = () => {

  return (
    <div className='flex relative h-[800px] w-full mt-28 text-white font-monts'>
      <Image src={aboutusBG} alt='white interior background' className='w-full h-full'/>
      <div className='absolute top-0 flex flex-col space-y-5 justify-around p-20 align-middle h-[800px] w-1/2 bg-[#1F1F1F] opacity-[80%]'>
        <h1 className='text-[56px]'>About Us</h1>
        <div>
          <h3 className='text-[3px]'>Key points about company</h3>
          <p className='text-[22px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nam veritatis commodi molestias facilis, doloremque. Ab aperiam labore ipsam ex.</p>
        </div>
        <div className='space-y-5'>
          <div className='text-[22px] w-[615px] flex justify-between'>
            <p> <span className='mr-6'>...</span> History</p> 
            <Image src={downarrow} alt='arrow down'/>
          </div>
          <hr className='text-white w-[615px] h-2' />
          <div className='text-[22px] w-[615px] flex justify-between'>
            <p> <span className='mr-6'>...</span> Quality</p> 
            <Image src={downarrow} alt='arrow down'/>
          </div>
          <hr className='text-white w-[615px] h-2' />
          <div className='text-[22px] w-[615px] flex justify-between'>
            <p> <span className='mr-6'>...</span> future</p> 
            <Image src={downarrow} alt='arrow down'/>
          </div>
          <hr className='text-white w-[615px] h-2' />
        </div>
      </div>
    </div>
  )
}

export default About