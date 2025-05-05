'use client'
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import navIcon from '@/public/assets/icons/nav-Icon.svg'
import Image from "next/image";
import { Session } from "next-auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useSession } from "next-auth/react";
import { getInitials } from "@/lib/utils";



const Navbar = () => {
  const [active, setActive] = useState<boolean>(false)
  const router = useRouter()
  const pathName = usePathname()
  const {data} = useSession()

  const handleRefresh = () => {
    if (pathName === '/') {
      router.refresh()
    }
  }

  console.log(data)
 
  return (
    <div className="mt-5">
      <nav className="flex justify-between gap-1">
        <ul className="flex w-[80%] justify-around items-center text-montserrat text-[22px]">
          <li className={pathName === '/' || active === true ? `w-[162px] p-4 h-[65px] rounded-[15px] text-center shadow-[6px_6px_10px_rgba(0,0,0,0.1),_-6px_-6px_10px_rgba(255,255,255,0.7)] bg-[#F9F9F9]hover:bg[#F9F9F9] hover:inset-ring-1 cursor-pointer font-bold text-[#12B7B6] transition-all ease-in duration-75` : 'hover:text-[#12B7B6] hover:font-bold text-[#545454]'} onClick={handleRefresh}>
            <Link href='/'>Home</Link>
          </li>
          <li className={pathName === '/about' || active === true ? `w-[162px] p-4 h-[65px] rounded-[15px] text-center shadow-[6px_6px_10px_rgba(0,0,0,0.1),_-6px_-6px_10px_rgba(255,255,255,0.7)] bg-[#F9F9F9]hover:bg[#F9F9F9] hover:inset-ring-1 cursor-pointer font-bold text-[#12B7B6] transition-all ease-in duration-75` : 'hover:text-[#12B7B6] hover:font-bold text-[#545454]'} onClick={handleRefresh}>
            <Link href='/about'>About</Link>
          </li>
          <li className={pathName === '/projects' || active === true ? `w-[162px] p-4 h-[65px] rounded-[15px] text-center shadow-[6px_6px_10px_rgba(0,0,0,0.1),_-6px_-6px_10px_rgba(255,255,255,0.7)] bg-[#F9F9F9]hover:bg[#F9F9F9] hover:inset-ring-1 cursor-pointer font-bold text-[#12B7B6] transition-all ease-in duration-75` : 'hover:text-[#12B7B6] hover:font-bold text-[#545454]'}>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className={pathName === '/localities' || active === true ? `w-[162px] p-4 h-[65px] rounded-[15px] text-center shadow-[6px_6px_10px_rgba(0,0,0,0.1),_-6px_-6px_10px_rgba(255,255,255,0.7)] bg-[#F9F9F9]hover:bg[#F9F9F9] hover:inset-ring-1 cursor-pointer font-bold text-[#12B7B6] transition-all ease-in duration-75` : 'hover:text-[#12B7B6] hover:font-bold text-[#545454]'}>
            <Link href='/localities'>Localities</Link>
          </li>
          <li className={pathName === '/developer' || active === true ? `w-[162px] p-4 h-[65px] rounded-[15px] text-center shadow-[6px_6px_10px_rgba(0,0,0,0.1),_-6px_-6px_10px_rgba(255,255,255,0.7)] bg-[#F9F9F9]hover:bg[#F9F9F9] hover:inset-ring-1 cursor-pointer font-bold text-[#12B7B6] transition-all ease-in duration-75` : 'hover:text-[#12B7B6] hover:font-bold text-[#545454]'}>
            <Link href='/developer'>Developer</Link>
          </li>
          <li>
            <Link href="/my-profile">
                <Avatar>
                    <AvatarFallback className="text-black font-bold bg-amber-100">{getInitials(data?.user?.name || "")}</AvatarFallback>
                </Avatar>
            </Link>
          </li>
        </ul>
        
        {data && <div className="w-[60px] h-[60px] rounded-[50%] p-2 border mr-5 cursor-pointer">
          {/* <Image src={navIcon} alt="Menu Icon" className="h-[40px]"/> */}
          <button>Logout</button>
        </div>}
      </nav>
    </div>
  )
}

export default Navbar