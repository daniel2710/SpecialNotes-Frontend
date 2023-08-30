import { SignInType } from "@/interfaces/form/login/login";
import { baseURL } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const signInService = async (data: SignInType) =>{
    const res = await baseURL.post(`auth/login`, data);
    return res.data;
}

export const useSignIn = () =>{  
    const router = useRouter()
    
    const signInFc = useMutation({ 
        mutationFn: signInService,
        onMutate: ()=>{
            toast.loading("Sending...", {
                position: "top-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        },
        onSuccess: (res) =>{
            toast.dismiss();
            Cookies.set('SPECIALNOTES-AUTH', res?.authentication?.sessionToken)
            Cookies.set('user-logged', JSON.stringify(res))
            router.push('/home')
        },
        onError: (res) =>{
            toast.dismiss();
        }
    })

    return { signInFc }

}