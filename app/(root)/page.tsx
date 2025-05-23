import { auth } from '@/auth'
import About from '@/components/About'
import AdvertArea from '@/components/AdvertArea'
import Companies from '@/components/Companies'
import Contact from '@/components/Contact'
import Filter from '@/components/Filter'
import Hero from '@/components/Hero'
import Localities from '@/components/Localities'
import RecentProject from '@/components/RecentProject'
import Steps from '@/components/Steps'
import Whatwedo from '@/components/Whatwedo'
import { redirect } from 'next/navigation'

import React from 'react'

const Home = async () => {

  const session = await auth()

  if (!session) redirect('/sign-in')

  return (
    <div className='min-h-screen p-3'>
        <Hero />
        <Companies />
        <Filter />
        <AdvertArea />
        <Steps />
        <Localities />
        <About/>
        <Whatwedo />
        <RecentProject />
        <Contact />
    </div>
  )
}

export default Home