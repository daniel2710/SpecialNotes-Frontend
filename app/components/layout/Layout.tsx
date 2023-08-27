"use client"
import { ReactElement, useContext } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { SidebarContext } from '@/context/UI/sidebar';

export interface layoutProps{
  content: ReactElement
} 

const Layout = ({ content }: layoutProps) => {

  const { setActive } = useContext(SidebarContext) 

  return (
    <main className='bg-light h-screen w-screen max-h-screen max-w-screen'>
      <Topbar/>
      <div className='flex h-[calc(100vh-7%)] w-full relative md:h-[calc(100vh-8%)]'>
        <Sidebar/>
        <section onClick={()=>setActive(false)} className='w-full h-full ml-16 bg-paynes scrollbar max-h-[calc(100vh-7%)] md:max-h-[calc(100vh-8%)]'>
          {content}
        </section>
      </div>
    </main>
  )
}

export default Layout