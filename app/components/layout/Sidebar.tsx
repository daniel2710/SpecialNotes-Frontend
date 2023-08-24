import { useContext } from 'react';
import { SidebarContext } from '@/context/UI/sidebar';
import { iconMappings, itemsSidebar } from '@/utils/itemsSidebar';
import { FiLogOut } from 'react-icons/fi';
import { useLogout } from '@/hooks/auth/useLogout';

const Sidebar = () => {
  const { logout } = useLogout()
  const { active, setActive } = useContext(SidebarContext) 

  return (
    <nav onClick={()=>setActive(true)} className={`sidebar p-1 absolute h-full ${active ? 'w-36' : 'w-16'} hover:w-36 transition-all duration-200 bg-rich-black text-white`}>
      <div className="h-full flex flex-col justify-between items-center">
        <ul className='flex flex-col gap-5 pt-3'>
          {itemsSidebar.map((item, index) => {
            const IconComponent = iconMappings[item.icon]; 
            return (
              <li key={index} className='flex gap-2 items-center'>
                {IconComponent && <IconComponent className="h-8 w-8" />}
                {active && <p className="text-base">{item.title}</p>}
              </li>
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