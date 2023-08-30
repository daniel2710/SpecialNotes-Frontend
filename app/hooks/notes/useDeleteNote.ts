import { NoteType } from "@/interfaces/form/notes/notes";
import { baseURL } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const deleteNoteService = async (data: NoteType) =>{
    const res = await baseURL.delete(`/notes/${data?._id}`);
    return res.data;
}

export const useDeleteNote = (setShowNote : (state: boolean)=>void, updateData: ()=>void) =>{  
    
    const deleteNoteFc = useMutation({ 
        mutationFn: deleteNoteService,
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
            setShowNote(false)
            updateData()
            toast.success("Note deleted successfully", {
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
            setShowNote(false)
            updateData()
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

    return { deleteNoteFc }

}