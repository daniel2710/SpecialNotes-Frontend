'use client'
import Link from 'next/link';
import Topbar from '@/components/landing/navigation/Topbar';
import Input from '@/components/UI/inputs/Input';
import Button from '@/components/UI/buttons/Button';
import { useSignUpForm } from '@/hooks/form/signUp/useSignUpForm';
import { motion } from 'framer-motion';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const SignUpPage = () => {

  const { values, handleSubmit, handleChange, errors, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword } = useSignUpForm()

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Topbar/>
      <main className='bg-main min-h-[calc(100vh-120px)] grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1'>

        <div className='pr-4 pl-4 flex flex-col md:pl-14 md:mt-10'>
          <div className='mt-5'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-3xl font-medium'>Create account</h1>
              <p className='text-base'>Access our features by creating an account so you can continue enjoying our app.</p>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-10 xl:w-[80%]'>
              <div className='flex items-center'>
                <label className='text-base font-medium w-32'>Name</label>
                <div className='relative w-full'>
                  <Input name="first_name" value={values.first_name} onChange={handleChange} type='text' placeholder='Enter your name' />
                  {errors.first_name && ( <p className='absolute top-9 text-sm mt-1 font-medium text-red-700'>{errors.first_name}</p> )}
                </div>
              </div>
              <div className='flex items-center'>
                <label className='text-base font-medium w-32'>Lastname</label>
                <div className='relative w-full'>
                  <Input name="last_name" value={values.last_name} onChange={handleChange} type='text' placeholder='Enter your lastname' />
                  {errors.last_name && ( <p className='absolute top-9 text-sm mt-1 font-medium text-red-700'>{errors.last_name}</p> )}
                </div>
              </div>
              <div className='flex items-center'>
                <label className='text-base font-medium w-32'>Username</label>
                <div className='relative w-full'>
                  <Input name="username" value={values.username} onChange={handleChange} type='text' placeholder='Enter a username' />
                  {errors.username && ( <p className='absolute top-9 text-sm mt-1 font-medium text-red-700'>{errors.username}</p> )}
                </div>
              </div>
              <div className='flex items-center'>
                <label className='text-base font-medium w-32'>Email</label>
                <div className='relative w-full'>
                  <Input name="email" value={values.email} onChange={handleChange} type='text' placeholder='Enter a email' />
                  {errors.email && ( <p className='absolute top-9 text-sm mt-1 font-medium text-red-700'>{errors.email}</p> )}
                </div>
              </div>
              <div className='flex items-center'>
                <label className='text-base font-medium w-32'>Password</label>
                <div className='relative w-full'>
                  <Input name="password" autoComplete='off' value={values.password} onChange={handleChange} type={showPassword ? 'text' : 'password'} placeholder='Enter a password' />
                  {errors.password && ( <p className='absolute top-9 text-sm mt-1 font-medium text-red-700'>{errors.password}</p> )}
                  { showPassword ?
                      <AiOutlineEyeInvisible title='Ocultar' onClick={()=>setShowPassword(!showPassword)} className='h-5 w-5 absolute right-2 top-[10px] cursor-pointer' />
                      : 
                      <AiOutlineEye title='Mostrar' onClick={()=>setShowPassword(!showPassword)} className='h-5 w-5 absolute right-2 top-[10px] cursor-pointer' />
                  }
                </div>
              </div>
              <div className='flex items-center'>
                <label className='text-base font-medium w-32'>Confirm password</label>
                <div className='relative w-full'>
                  <Input name="confirm_password" autoComplete='off' value={values.confirm_password} onChange={handleChange} type={showConfirmPassword ? 'text' : 'password'} placeholder='Repeat password' />
                  {errors.confirm_password && ( <p className='absolute top-9 text-sm mt-1 font-medium text-red-700'>{errors.confirm_password}</p> )}
                  { showConfirmPassword ?
                      <AiOutlineEyeInvisible title='Ocultar' onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className='h-5 w-5 absolute right-2 top-[10px] cursor-pointer' />
                      : 
                      <AiOutlineEye title='Mostrar' onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className='h-5 w-5 absolute right-2 top-[10px] cursor-pointer' />
                  }
                </div>
              </div>
              <div>
                <Button color='Default' text='Confirm' type='submit' />
              </div>
              <hr className='h-[2px] bg-black' />
              <div className='mt-5'>
                <div className='flex gap-2'>
                  <p className='text-base'>Already have an account?</p>
                  <Link href='/signin'>
                    <span className='cursor-pointer text-base font-bold underline'>Sign in</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='hidden md:flex justify-center items-center bg-black text-white'>
          <h1 className='text-4xl text-center'>Sign up to unlock unique experiences.</h1>
        </div>
      </main>
    </motion.div>
  )
}

export default SignUpPage