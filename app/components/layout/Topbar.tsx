"use client"
import { useContext } from 'react';
import { SidebarContext } from '@/context/UI/sidebar';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useEffect } from 'react';

const Topbar = () => {
    const [ name, setName ] = useState('')
    const { active, setActive } = useContext(SidebarContext)

    useEffect(()=>{
        setName(JSON.parse(Cookies.get('user-logged') || 'U').name || 'U')
    }, [name])

    return (
        <nav className='z-50 w-full h-[7%] bg-rich-black text-light md:h-[8%]'>
            <div className='flex h-full w-full items-center md:pl-20'>
                <div className="p-1 pl-4 md:hidden">
                    {active ? <AiOutlineCloseCircle onClick={()=>setActive(false)} className='h-8 w-8' /> 
                    : <HiOutlineMenuAlt2 onClick={()=>setActive(true)} className='h-8 w-8' />
                    }
                </div>

                <div className='flex justify-between w-full items-center'>
                    <div className='ml-7 md:ml-0'>
                        <h1 className='text-base md:text-2xl'>SpecialNotes</h1>
                    </div>
                    {name && <div className="pr-1 flex gap-3 items-center">
                        <div className="hidden md:block">
                            <p className="text-sm md:text-2xl">Welcome, {name}</p>
                        </div>

                        <div className='flex justify-center h-10 w-10 items-center bg-paynes rounded-full'>
                            <span className="text-2xl">{name?.slice(0,1).toUpperCase()}</span>
                        </div>
                    </div>}
                </div>
            </div>
        </nav>
    )
}

export default Topbar