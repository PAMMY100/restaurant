import Companies from '@/components/Companies'
import Filter from '@/components/Filter'
import Hero from '@/components/Hero'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen p-3 space-y-4'>
        <Hero />
        <Companies />
        <Filter />
    </div>
  )
}

export default Home