import { NoteType } from "@/interfaces/form/notes/notes";
import { baseURL } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const createNoteService = async (data: NoteType) =>{
    const res = await baseURL.post(`/notes`, data);
    return res.data;
}

export const useCreateNote = () =>{  
    
    const createNoteFc = useMutation({ 
        mutationFn: createNoteService,
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
            toast.success("Note created...", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        },
        onError: (res) =>{
            toast.dismiss();
            console.log(res)
            toast.error("Error, try again", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    })

    return { createNoteFc }

}