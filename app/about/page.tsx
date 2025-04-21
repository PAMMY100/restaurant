import AboutHero from '@/components/about/AboutHero'
import Zeal from '@/components/about/Zeal'
import ZealObjective from '@/components/about/ZealObjective'
import Header from '@/components/Header'
import React from 'react'

const page = () => {

  return (
    <div>
      <Header />
      <AboutHero />
      <Zeal />
      <ZealObjective />
    </div>
  )
}

export default page