"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { z, ZodType } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FIELD_TYPES } from "@/constants"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import emailjs from "emailjs-com"
import config from "@/lib/config"

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{success: boolean, error?: string}>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues> ({type, schema, defaultValues, onSubmit}: Props<T>) => {

  const router = useRouter()
  const isSignIn = type === "SIGN_IN";

  //1. Define your form.
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>

  })

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);
    if (result.success) {

      const { email, fullName } = data

      try {
        const emailParams = {
          to_name: fullName,
          to_email: email,
        };

        const response = await emailjs.send(
          config.env.emaijs.serviceID,
          config.env.emaijs.ejsOnboarding,
          emailParams,
          config.env.emaijs.ejsPublicKey
        )

        if (response.status === 200) {
          console.log("Onboarding email sent successfully!")
        } else {
          console.log("Failed to send onboarding email.")
        }
      } catch (error) {
        console.log("Error sending onboarding email.")
      }

      toast.success(isSignIn ? "You have successfully signed in." : "You have successfully signed up.")

      router.push('/');

    } else {
      toast.error(`Error ${isSignIn ? "signing in" : "signing up"}`)
    }
  }

  return (
    <div className="flex flex-col gap-4 font-mono">
        <h1 className="text-xl font-semibold mt-8">
          {isSignIn ? 'welcome back to PerfectHome' : 'Create your account'}
        </h1>
        <p>{isSignIn ?
        "Access the vast collection of beatuiful house accross the world!" :
        "Please complete all fields"}</p>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 w-full">
          {
            Object.keys(defaultValues).map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field as Path<T>}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{field.name.charAt(0).toLocaleUpperCase() + field.name.slice(1)}</FormLabel>
                    <FormControl>
                      <Input required type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))
          }
          <Button type="submit" className="w-[60%] h-[40px] bg-prim text-white text-xl max-sm:ml-[20%] cursor-pointer">{isSignIn ? "Sign In" : "Sign Up"}</Button>
        </form>
      </Form>
      <p className="text-center text-base font-medium">
        {isSignIn ? "New to PerferctHome ? " : "Already have an account? "}
        <Link href={isSignIn ? "/sign-up" : "/sign-in"} className="font-bold">{isSignIn ? "Create an account" : "Sign in"}</Link>
      </p>
    </div>
  )
}

export default AuthForm