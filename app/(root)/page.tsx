import AdvertArea from '@/components/AdvertArea'
import Companies from '@/components/Companies'
import Filter from '@/components/Filter'
import Hero from '@/components/Hero'
import Localities from '@/components/Localities'
import Steps from '@/components/Steps'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen p-3 space-y-4'>
        <Hero />
        <Companies />
        <Filter />
        <AdvertArea />
        <Steps />
        <Localities />
    </div>
  )
}

export default Home