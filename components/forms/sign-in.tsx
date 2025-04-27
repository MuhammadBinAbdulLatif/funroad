'use client'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage } from "../ui/form"
import * as z from "zod"
import { loginSchema } from "@/types/auth-schema"
import { Poppins } from "next/font/google";
import { useMutation } from "@tanstack/react-query"
import Link from "next/link";
import { toast } from "sonner"
import { useTRPC } from "@/trpc/client"
import { useRouter } from "next/navigation"

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

const SignIn = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })
    const router = useRouter()
    const trpc = useTRPC()
    const login = useMutation(trpc.auth.login.mutationOptions({
        onError: (err) => {
            console.log(err)
            toast.error(err.message)
        },
        onSuccess: () => {
            toast.success("Logged in successfully.")
            router.push('/')
        }
    }))

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        login.mutate(data)
       
    }
    return (
      <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen bg-[#f4f4f0]">
        <div className="flex flex-col lg:col-span-3 items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8 mt-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <span className={`text-2xl font-bold ${poppins.className}`}>funroad</span>
              <Link href="/sign-up" className="text-sm font-medium underline">Sign Up</Link>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={login.status === 'pending'} className="w-full bg-black text-white hover:bg-neutral-800">login</Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="h-screen w-full lg:col-span-2 hidden lg:block" style={{backgroundImage: "url('/auth-background.png')", backgroundSize: 'cover', backgroundPosition: 'center'}} />
      </div>
    )
  }
  
  export default SignIn