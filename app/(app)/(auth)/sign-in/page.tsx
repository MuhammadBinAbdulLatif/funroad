import SignIn from "@/components/forms/sign-in"
import { caller } from "@/trpc/server"
import { redirect } from "next/navigation"

const page = async () => {
    const session = await caller.auth.session()
    if(session.user) {
        return redirect('/')
    }
  return (
    <SignIn />
  )
}

export default page