'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
import navIcon from '@/public/assets/icons/nav-Icon.svg'
import Image from "next/image";


const Navbar = () => {
  const [home, setHome] = useState('');
  const [project, setProject] = useState('');
  const [localities, setLocalities] = useState('');
  const [developer, setDelevolper] = useState('');
  const pathName = usePathname()

  return (
    <div className="mt-5">
      <nav className="flex justify-between gap-1">
        <ul className="flex w-[80%] justify-around items-center text-montserrat text-[22px]">
          <li className={pathName === '/' || home === 'home' ? `w-[162px] p-4 h-[65px] rounded-[15px] text-center shadow-[6px_6px_10px_rgba(0,0,0,0.1),_-6px_-6px_10px_rgba(255,255,255,0.7)] bg-[#F9F9F9]` : ''} onClick={() => setHome('home')}>
            <Link href='/' className="font-bold text-[#12B7B6]">Home</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/localities'>Localities</Link>
          </li>
          <li>
            <Link href='/developer'>Developer</Link>
          </li>
        </ul>
        <div className="w-[60px] h-[60px] rounded-[50%] p-2 border mr-5">
          <Image src={navIcon} alt="Menu Icon" className="h-[40px]"/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar