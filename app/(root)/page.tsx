import Image from 'next/image'
import logo from '@/public/assets/icons/rLogo.svg';
import hpImage from '@/public/assets/images/hpImage.png';
import search from '@/public/assets/icons/search.svg'
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <div className='p-3 flex justify-between'>
      <div className='space-y-9 flex flex-col ml-10 mt-10 gap-7 w-[600px]'>
        <Image src={logo} alt="project logo"/>
        <div className='space-y-3 text-[54px] leading-16'>
          <p>We Help You</p>
          <p>Building The Dreams</p>
          <p>& Bring More Than</p>
          <p>You Expect</p>
        </div>
        <div className='flex w-[385px] h-[100px] bg-[#F9F9F9] p-7 justify-around align-middle rounded-[20px] shadow-lg'>
          <input type="text" placeholder='Search Properties' className='text-[#12B7B6] text-[26px] font-bold w-[246px] h-[29.1px] outline-none border-none' /> 
          <Image src={search} alt='Search Icon' className='w-[22px] h-[26.5px] mt-1 cursor-pointer'/>
        </div>
      </div>
      <div className=' items-end'>
        <Image src={hpImage} alt='Beautiful image' className='w-[1000px] h-[871px]'/>
        <Navbar />
      </div>
    </div>
  )
}
export default Home