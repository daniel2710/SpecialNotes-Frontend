import { useState } from "react"
import { SignInFormValidate } from "@/validate/loginForm"
import { SignInType } from "@/interfaces/form/login/login"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import { useSignIn } from "@/hooks/signIn/useSignIn"
import { AxiosError } from "axios"
import { errorResponse } from "@/interfaces/errors/errors"

export const useSignInForm = () =>{
    const { signInFc } = useSignIn()
    const [ showPassword, setShowPassword ] = useState(false)
  
    const formik = useFormik<SignInType>({
        validationSchema: SignInFormValidate,
		initialValues: {
            username: '',
            password: '',
		},
		onSubmit: async (values, { resetForm }) => {
            try {
                await signInFc.mutateAsync(values)
                resetForm()
            } catch (error) {
                const axiosError = error as AxiosError<errorResponse>
                const errorMessage = axiosError.response?.data.message || "An error occurred, please try again."
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }
            
		}
	})

    const { values, handleSubmit, handleChange, errors, touched, isSubmitting } = formik

    return { values, handleSubmit, handleChange, errors, touched, isSubmitting, showPassword, setShowPassword }
}