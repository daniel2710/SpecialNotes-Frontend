'use client'
import Button from '@/components/UI/buttons/Button';
import Input from '@/components/UI/inputs/Input';
import Topbar from '@/components/landing/navigation/Topbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

const RegisterPage = () => {
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
            <div className='flex flex-col gap-5 mt-10 xl:w-[80%]'>
              <div className='flex items-center'>
                <label className='text-base font-medium w-32'>Name</label>
                <Input type='text' placeholder='Enter your name' />
              </div>
              <div className='flex items-center'>
                <label className='text-base font-medium w-32'>Lastname</label>
                <Input type='text' placeholder='Enter your lastname' />
              </div>
              <div className='flex items-center'>
                <label className='text-base font-medium w-32'>Birthday</label>
                <Input type='text' placeholder='Enter your name' />
              </div>
              <div className='flex items-center'>
                <label className='text-base font-medium w-32'>Username</label>
                <Input type='text' placeholder='Enter a username' />
              </div>
              <div className='flex items-center'>
                <label className='text-base font-medium w-32'>Email</label>
                <Input type='text' placeholder='Enter a email' />
              </div>

              <div>
                <Button color='Default' text='Confirm' type='button' />
              </div>

              <hr className='h-[2px] bg-black' />

              <div className='mt-5'>
                <div className='flex gap-2'>
                  <p className='text-base'>Already have an account?</p>
                  <Link href='/login'>
                    <span className='cursor-pointer text-base font-bold underline'>Sign in</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className='hidden md:flex justify-center items-center bg-black text-white'>
          <h1 className='text-4xl text-center'>Sign up to unlock unique experiences.</h1>
        </div>

      </main>
    </motion.div>
  )
}

export default RegisterPage