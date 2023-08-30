import { UserBasic } from "@/interfaces/auth/user"
// import { baseURL } from "../axios"

export const checkToken = async (token: string): Promise<UserBasic | null> => {
  try {
    const response: any = await fetch(`http://localhost:8080/users/token/${token}`,{
      cache: 'no-cache',
      credentials: 'include'
    })
    const user = await response.json()
    return user
  } catch (error) {
    return null
  }
}