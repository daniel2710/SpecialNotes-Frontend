import * as yup from 'yup';

export const SignUpFormValidate = yup.object().shape({
    first_name: yup.string().trim().required("! required field."),
    last_name: yup.string().trim().required("! required field."),
    email: yup.string().email("Enter a valid email").required("! required field."),
    username: yup.string().trim().required("! required field."),
    password: yup.string().required('! required field.').min(8, 'Minimum 8 characters'),
    confirm_password: yup.string().trim().required('! required field.').oneOf([yup.ref('password')], 'Passwords must match')
})

export const SignInFormValidate = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("! required field."),
    password: yup.string().trim().required("! required field.").min(8, 'Minimum 8 characters'),
})