import Button from '@/components/UI/buttons/Button';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import { useEffect } from 'react';
import { FiUserCheck } from 'react-icons/fi';

const SignUpSuccess = () => {

    useEffect(()=>{
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 1 }  
        });
    }, [])

    return (
        <div className="fixed z-50 inset-0 bg-rich-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-light p-5 w-[500px] h-[300px] flex flex-col rounded-xl xl:mx-0 mx-3">
            <div className="flex flex-col text-rich-black">
                <div className="flex justify-center items-center ">
                    <FiUserCheck className='h-20 w-20 text-main' />
                </div>
                <div className="bg-light flex flex-col gap-5">
                    <h1 className='text-3xl text-center'>Great!, Successful registration</h1>
                    <p className='text-2xl text-center'>Now you can log in</p>
                    <Link href='/signin' className='w-fit m-auto'>
                        <Button color='Default' text='SignIn' type='button' />
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SignUpSuccess