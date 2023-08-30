import SignUp from "@/views/signUp/SignUp";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getValidateToken() {
  const cookieStore = cookies()
  try {
    const res = await fetch(`https://specialnotesback.onrender.com/users/token/${cookieStore?.get('SPECIALNOTES-AUTH')!.value}`, { cache: "no-cache" })
    const user = await res.json()
    return user
  } catch (error) {
    return null
  }
}

export default async function Page() {
  const user = await getValidateToken()

  if(user){   
    redirect('/home')
  }
 
  return (
    <SignUp/>
  )
}
