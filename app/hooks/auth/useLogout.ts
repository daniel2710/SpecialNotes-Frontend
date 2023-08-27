import { SidebarContext } from "@/context/UI/sidebar";
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useContext } from 'react';

export const useLogout = () =>{
    const { setActive } = useContext(SidebarContext)    
    const router = useRouter()

    const logout = () =>{
        Cookies.remove('SPECIALNOTES-AUTH')
        setActive(false)
        router.push('/')
    }

    return { logout }
}