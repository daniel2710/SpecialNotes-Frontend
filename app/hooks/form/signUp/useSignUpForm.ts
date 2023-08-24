import { useState } from "react"
import { SignUpFormValidate } from "@/validate/loginForm"
import { SignUpType } from "@/interfaces/form/login/login"
import { useSignUpFc } from "@/hooks/signUp/useSignUp"
import { useFormik } from "formik"
import { toast } from "react-toastify"

export const useSignUpForm = () =>{
    const { signUpFc } = useSignUpFc()  
    const [ showModalSucess, setShowModalSucess ] = useState(false)
    const [ showPassword, setShowPassword ] = useState(false)
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false)

    const formik = useFormik<SignUpType>({
        validationSchema: SignUpFormValidate,    
		initialValues: {
            name: '',
            lastname: '',
			username: '',  
			password: '',
            confirm_password: ''
		},
		onSubmit: async (values, { resetForm }) => {
            try {
                await signUpFc.mutateAsync(values)
                resetForm()
                setShowModalSucess(true)
            } catch (error) {
                toast.error("Error, try again.", {
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
		}
	})

    const { values, handleSubmit, handleChange, errors, touched, isSubmitting } = formik

    return { values, handleSubmit, handleChange, errors, touched, isSubmitting, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword, showModalSucess }
}