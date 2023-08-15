import { SignUpFormValidate } from "@/validate/loginForm"
import { useFormik } from "formik"
import { SignUpType } from "@/interfaces/form/login/login"
import { useState } from "react"

export const useSignUpForm = () =>{
    const [ showPassword, setShowPassword ] = useState(false)
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false)

    const formik = useFormik<SignUpType>({
        validationSchema: SignUpFormValidate, 
		initialValues: {
            first_name: '',
            last_name: '',
            email: '',
			username: '',
			password: '',
            confirm_password: ''
		},
		onSubmit: (values) => {
            console.log(values)
		}
	})

    const { values, handleSubmit, handleChange, errors } = formik

    return { values, handleSubmit, handleChange, errors, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword }
}