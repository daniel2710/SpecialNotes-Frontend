import { SignUpFormValidate } from "@/validate/loginForm"
import { useFormik } from "formik"
import { SignUpType } from "@/interfaces/form/login/login"
import { useState } from "react"
import { useSignUpFc } from "@/hooks/signUp/useSignUp"

export const useSignUpForm = () =>{
    const { createItemFc } = useSignUpFc()
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
		onSubmit: (values, { resetForm }) => {
            createItemFc.mutate(values, {
                onSuccess: ()=>{
                    resetForm()
                }
            })
		}
	})

    const { values, handleSubmit, handleChange, errors, resetForm } = formik

    return { values, handleSubmit, handleChange, errors, resetForm, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword }
}