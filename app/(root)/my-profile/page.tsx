import React from 'react'
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';


async function page() {

  async function logout() {
    'use server';
    await signOut();
    (await cookies()).delete('token');
    redirect('/sign-in');
  }

  return (
    <form action={logout}>
      <Button type="submit" className='cursor-pointer'>Logout</Button>
    </form>
  )
}

export default page;