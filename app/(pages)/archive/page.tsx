import Layout from "@/components/layout/Layout"
import { checkToken } from "@/services/auth/checkToken"
import Archive from "@/views/archive/Archive"
import { cookies } from "next/headers"
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
  const cookieStore = cookies()
  const token = cookieStore?.get('SPECIALNOTES-AUTH')

  if(!token){   
    redirect('/signin')
  }

  const user = await getValidateToken()

  if(!user){   
    redirect('/signin')
  }

  return (
    <Layout content={<Archive user={user} />} />
  )
}
