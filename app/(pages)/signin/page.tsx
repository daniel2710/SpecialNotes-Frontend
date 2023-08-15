'use client'
import Link from 'next/link';
import Topbar from '@/components/landing/navigation/Topbar';
import Input from '@/components/UI/inputs/Input';
import Button from '@/components/UI/buttons/Button';
import { useSignInForm } from '@/hooks/form/signIn/useSignInForm';
import { motion } from 'framer-motion';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const SignInPage = () => {   

  const { values, handleSubmit, handleChange, errors, showPassword, setShowPassword } = useSignInForm()

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
              <h1 className='text-3xl font-medium'>Sign in</h1>
              <p className='text-base'>Enter your credentials, if you do not have them yet you can <Link href='/signup' className='underline cursor-pointer font-bold'>sign up</Link>.</p>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-10 xl:w-[80%]'>
              
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
              
              <div>
                <Button color='Default' text='Confirm' type='submit' />
              </div>
              <hr className='h-[2px] bg-black' />
              <div className='mt-5'>
                <div className='flex gap-2'>
                  <p className='text-base'>You have not yet registered?</p>
                  <Link href='/signup'>
                    <span className='cursor-pointer text-base font-bold underline'>Sign up</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='hidden md:flex justify-center items-center bg-black text-white px-2'>
          <h1 className='text-4xl text-center'>Build your world of ideas with a single login. Welcome to a universe of sticky notes and limitless creativity.</h1>
        </div>
      </main>
    </motion.div>
  )
}

export default SignInPage