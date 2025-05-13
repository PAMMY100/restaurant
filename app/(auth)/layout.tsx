import Image from 'next/image'
import React, { ReactNode } from 'react'
import { logo } from '@/public/assets/Icon'
import { aboutusBG } from '@/public/assets/Icon'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const layout = async ({children}: {children: ReactNode}) => {

  const session = await auth();

  if (session) redirect('/')

  return (
    <main className='h-[100%] md:flex'>
      <section className='w-full'>
        <Image src={aboutusBG} alt='auth Ilustration' className='w-full h-full'/>
      </section>
      <section className='h-full w-full max-sm:rounded-t-[20%]'>
        <div className='p-8'>
          <div className='flex flex-row items-center gap-3'>
            <Image src={logo} alt='logo' width={47} height={47}/>
            <h1 className='text-3xl font-bold'>PerfectHome</h1>
          </div>
          <div>{children}</div>
        </div>
      </section>
    </main>
  )
}

export default layout