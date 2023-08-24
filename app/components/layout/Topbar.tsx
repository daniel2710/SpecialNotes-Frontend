"use client"
import { useContext } from 'react';
import { SidebarContext } from '@/context/UI/sidebar';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoSettingsSharp } from 'react-icons/io5';

const Topbar = () => {

    const { active, setActive } = useContext(SidebarContext) 

    return (
        <nav className='w-full h-[6.5%] bg-rich-black text-light md:h-[8%]'>
            <div className='flex h-full w-full items-center md:pl-20'>
                <div className="p-1 pl-4 md:hidden">
                    {active ? <AiOutlineCloseCircle onClick={()=>setActive(false)} className='h-8 w-8' /> 
                    : <HiOutlineMenuAlt2 onClick={()=>setActive(true)} className='h-8 w-8' />
                    }
                </div>

                <div className='flex justify-between w-full items-center'>
                    <div className='ml-7 md:ml-0'>
                        <h1>SpecialNotes</h1>
                    </div>
                    <ul className="pr-1">
                        <li>
                            <IoSettingsSharp className="h-8 w-8" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Topbar