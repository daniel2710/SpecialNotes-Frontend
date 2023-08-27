"use client"
import { useContext } from 'react';
import Link from 'next/link';
import { SidebarContext } from '@/context/UI/sidebar';
import { iconMappings, itemsSidebar } from '@/utils/itemsSidebar';
import { useLogout } from '@/hooks/auth/useLogout';
import { FiLogOut } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const { logout } = useLogout()
  const patch = usePathname();
  const { active } = useContext(SidebarContext)  

  return (
    <nav className={`sidebar z-50 p-1 absolute h-full ${active ? 'w-36' : 'w-16'} md:hover:w-36 transition-all duration-200 bg-rich-black text-white`}>
      <div className="h-full flex flex-col justify-between items-center">
        <ul className='flex flex-col gap-5 pt-3'>
          {itemsSidebar.map((item, index) => {
            const IconComponent = iconMappings[item.icon]; 
            return (
              <Link href={item.route} key={index} className={`flex justify-evenly py-2 px-2 gap-2 items-center ${patch === item.route && 'bg-paynes rounded-full'}`}>
                {IconComponent && <IconComponent className="h-8 w-8" />}
                {active && <p className="text-base">{item.title}</p>}
              </Link>
            );
          })}
        </ul>
        <ul className='flex flex-col gap-5 pb-5'>
          <li>
            <FiLogOut onClick={logout} className='h-10 w-10' />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar