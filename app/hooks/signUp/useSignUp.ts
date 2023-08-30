import { SignUpType } from "@/interfaces/form/login/login";
import { baseURL } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const signUpService = async (data: SignUpType) =>{
    const res = await baseURL.post(`/auth/register`, data);
    return res.data;
}

export const useSignUpFc = () =>{  
    
    const signUpFc = useMutation({ 
        mutationFn: signUpService,
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
        onSuccess: () =>{
            toast.dismiss();
        },
        onError: () =>{
            toast.dismiss();
        }
    })

    return { signUpFc }

}