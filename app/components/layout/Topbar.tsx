"use client"
import { useContext } from 'react';
import { SidebarContext } from '@/context/UI/sidebar';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoSettingsSharp } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Topbar = () => {
    const patch = usePathname();
    const { active, setActive } = useContext(SidebarContext) 

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
                        <h1 className='text-xl'>SpecialNotes</h1>
                    </div>
                    <ul className="pr-1">
                        <Link href='/settings' className={`flex justify-center py-1 items-center ${patch === '/settings' && 'bg-paynes rounded-full px-1'}`}>
                            <IoSettingsSharp className="h-8 w-8" />
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Topbar