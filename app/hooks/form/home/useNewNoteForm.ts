import { useState } from "react"
import { useFormik } from "formik"
import { NoteType } from "@/interfaces/form/notes/notes"
import { useCreateNote } from "@/hooks/notes/useCreateNote"
import { toast } from "react-toastify"

export const useNewNoteForm = (setShowNote : (state: boolean)=>void, updateData: ()=>void) =>{
    const { createNoteFc } = useCreateNote()
    const [ showOptionsPint, setShowOptionsPint ] = useState(false)
    const [ pinned, setPinned ] = useState(false)
    const [ archived, setArchived ] = useState(false)
    const [ backgroundColor, setBackgroundColor ] = useState('rich-black')
    const [ textColor, setTextColor ] = useState('text-light');

    const handleColorChange = (newBackgroundColor: string, newTextColor: string) => {
        setBackgroundColor(newBackgroundColor);
        setTextColor(newTextColor);
    };
    
    const formik = useFormik<NoteType>({ 
		initialValues: {
            title: 'My note title...',
            content: '',
            settings: {
                pinned: false,
                archived: false,
                backgroundColor: 'rich-black'
            }
		},
		onSubmit: async (values, { resetForm }) => {
            values.settings.pinned = pinned
            values.settings.backgroundColor = backgroundColor
            values.settings.archived = archived
            try {
                await createNoteFc.mutateAsync(values)
                resetForm()
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
        textColor, handleColorChange, archived, setArchived
    }
}