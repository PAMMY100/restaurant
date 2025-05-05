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
    <main>
      <section>
        <div>
          <div className='flex flex-row gap-3'>
            <Image src={logo} alt='logo' width={37} height={37}/>
            <h1>PerfectHome</h1>
          </div>
          <div>{children}</div>
        </div>
      </section>
      <section className='auth-illustration'>
        <Image src={aboutusBG} alt='auth Ilustration' height={1000} width={1000}/>
      </section>
    </main>
  )
}

export default layout