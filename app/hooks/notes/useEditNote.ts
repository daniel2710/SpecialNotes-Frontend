import { NoteType } from "@/interfaces/form/notes/notes";
import { baseURL } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const editNoteService = async (data: NoteType) =>{
    const res = await baseURL.patch(`/notes/${data?._id}`, data);
    return res.data;
}

export const useEditNote = () =>{  
    
    const editNoteFc = useMutation({ 
        mutationFn: editNoteService,
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
            toast.success("Note modified successfully", {
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
        onError: () =>{
            toast.dismiss();
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

    return { editNoteFc }

}