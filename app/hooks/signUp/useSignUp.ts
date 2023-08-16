import { SignUpType } from "@/interfaces/form/login/login";
import { baseURL } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";
import Cookies from 'js-cookie';

const signUpService = async (data: SignUpType) =>{
    const res = await baseURL.post(`auth/register`, data);
    return res.data;
}

export const useSignUpFc = () =>{
    
    const createItemFc = useMutation({ 
        mutationFn: signUpService,
        onMutate: () =>{
            console.log("fetching")
        },
        onSuccess: (res) =>{
            Cookies.set('SPECIALNOTES-AUTH', res?.user?.authentication?.salt)
        },
        onError: (error) =>{
           console.log(error)
        }
    })

    return { createItemFc }

}