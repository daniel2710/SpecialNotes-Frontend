import { useState } from "react"
import { SignInFormValidate } from "@/validate/loginForm"
import { useFormik } from "formik"
import { SignInType } from "@/interfaces/form/login/login"

export const useSignInForm = () =>{
    const [ showPassword, setShowPassword ] = useState(false)

    const formik = useFormik<SignInType>({
        validationSchema: SignInFormValidate,
		initialValues: {
            username: '',
            password: '',
		},
		onSubmit: (values) => {
            console.log(values)
		}
	})

    const { values, handleSubmit, handleChange, errors } = formik

    return { values, handleSubmit, handleChange, errors, showPassword, setShowPassword }
}