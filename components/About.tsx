import React from 'react'
import { aboutusBG } from '@/public/assets/Icon'
import Image from 'next/image'

const About = () => {

  return (
    <div className='h-[1080px] w-[1921px]'>
      <Image src={aboutusBG} alt='white interior background'/>
      <div>
        <h1>About Us</h1>
        <div>
          <h3>Key points about company</h3>
        </div>
      </div>
    </div>
  )
}

export default About