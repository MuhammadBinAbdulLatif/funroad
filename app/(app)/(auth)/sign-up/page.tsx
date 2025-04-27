import SignUp from "@/components/forms/sign-up"
import { caller } from "@/trpc/server"
import { redirect } from "next/navigation"

const page =  async () => {
  const session = await caller.auth.session()
    if(session.user) {
        return redirect('/')
    }
  return (
    <SignUp />
  )
}

export default page