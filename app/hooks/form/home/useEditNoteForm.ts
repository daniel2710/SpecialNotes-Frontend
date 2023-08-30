import { useState } from "react"
import { useFormik } from "formik"
import { NoteType } from "@/interfaces/form/notes/notes"
import { useEditNote } from "@/hooks/notes/useEditNote"
import { toast } from "react-toastify"
import { Notes } from './../../../interfaces/notes/notes';

export const useEditNoteForm = (item: Notes, setShowNote : (state: boolean)=>void, updateData: ()=>void) =>{
    const { editNoteFc } = useEditNote()
    const [ showOptionsPint, setShowOptionsPint ] = useState(false)
    const [ pinned, setPinned ] = useState(item?.settings?.pinned!)
    const [ active, setActive ] = useState(item?.settings?.active!)
    const [ archived, setArchived ] = useState(item?.settings?.archived!)
    const [ backgroundColor, setBackgroundColor ] = useState(item?.settings?.backgroundColor!)
    const [ textColor, setTextColor ] = useState('text-light');

    const handleColorChange = (newBackgroundColor: string, newTextColor: string) => {
        setBackgroundColor(newBackgroundColor);
        setTextColor(newTextColor);
    };
    
    const formik = useFormik<NoteType>({ 
		initialValues: {
            _id: item?._id!,
            title: item?.title!,
            content: item?.content!,
            settings: {
                active: active,
                pinned: pinned,
                archived: archived,
                backgroundColor: backgroundColor
            }
		},
		onSubmit: async (values) => {
            values.settings.active = active
            values.settings.pinned = pinned
            values.settings.backgroundColor = backgroundColor
            values.settings.archived = archived
            try {
                await editNoteFc.mutateAsync(values)
                setShowNote(false)
                updateData()
            } catch (error) {
                toast.error("Error, try again", {
                    position: "top-center",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            
		}
	})

    const { values, handleSubmit, handleChange } = formik

    return { values, handleSubmit, handleChange, pinned, setPinned, showOptionsPint, setShowOptionsPint, backgroundColor,
        textColor, handleColorChange, archived, setArchived, active, setActive
    }
}