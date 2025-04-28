"use client"

import AuthForm from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validations'
import React from 'react'

const page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        fullName: "",
        email: "",
        phone: 0,
        address: "",
        password: ""
      }}
      onSubmit={() => {}}
    />
  )
}

export default page