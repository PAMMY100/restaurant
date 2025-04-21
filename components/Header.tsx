import Image from 'next/image'
import React from 'react';
import { logo } from '@/public/assets/Icon';
import Navbar from './Navbar';

const Header = () => {

  return (
    <div className='flex justify-between items-center p-5'>
      <div>
        <Image src={logo} alt='logo'/>
      </div>
      <div className='w-[60%]'>
        <Navbar />
      </div>
    </div>
  )
}

export default Header