import SignIn from "@/views/signin/SignIn"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"

async function getValidateToken() {
  const cookieStore = cookies()
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/token/${cookieStore?.get('SPECIALNOTES-AUTH')!.value}`, { cache: "no-cache" })
    const user = await res.json()
    return user
  } catch (error) {
    return null
  }
}

export default async function page() {
  const user = await getValidateToken()

  if(user){   
    redirect('/home')
  }

  return (
    <SignIn/>
  )
}
