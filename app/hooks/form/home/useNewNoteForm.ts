import { useState } from "react"
import { useFormik } from "formik"
import { NoteType } from "@/interfaces/form/notes/notes"

export const useNewNoteForm = (setShowNote : (state: boolean)=>void) =>{
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
            console.log("Submit")
            try {
                console.log(values)
                setShowNote(false)
            } catch (error) {
                console.log(error);
            }
            
		}
	})

    const { values, handleSubmit, handleChange } = formik

    return { values, handleSubmit, handleChange, pinned, setPinned, showOptionsPint, setShowOptionsPint, backgroundColor,
        textColor, handleColorChange, archived, setArchived
    }
}