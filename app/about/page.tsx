import AboutHero from '@/components/about/AboutHero'
import Clients from '@/components/about/Clients'
import Objectives from '@/components/about/Objectives'
import Team from '@/components/about/Team'
import Zeal from '@/components/about/Zeal'
import ZealObjective from '@/components/about/ZealObjective'
import Header from '@/components/Header'
import Whatwedo from '@/components/Whatwedo'
import React from 'react'

const page = () => {

  return (
    <div>
      <Header />
      <AboutHero />
      <Zeal />
      <ZealObjective />
      <Objectives />
      <Whatwedo />
      <Clients />
      <Team />
    </div>
  )
}

export default page