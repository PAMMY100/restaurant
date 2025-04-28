"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
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


interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{success: boolean, error?: string}>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues> ({type, schema, defaultValues, onSubmit}: Props<T>) => {

  const isSignIn = type === "SIGN_IN";

  //1. Define your form.
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>

  })

  const handleSubmit: SubmitHandler<T> = async (data) => {
    console.log(data)
  }

  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-white">
          {isSignIn ? 'welcome back to PerfectHome' : 'Create your account'}
        </h1>
        <p>{isSignIn ?
        "Access the vast collection of beatuiful house accross the world!" :
        "Please complete all fields"}</p>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
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