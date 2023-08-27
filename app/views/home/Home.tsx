'use client'
import Note from "@/components/notes/Note";
import NewNote from "@/components/views/home/NewNote";
import { useGetAllNotes } from "@/hooks/notes/useGetAllNotes";
import { Notes } from "@/interfaces/notes/notes";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoAddCircleSharp } from "react-icons/io5";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const updateData = () =>{
    queryClient.invalidateQueries({ queryKey:['allNotes']});
  }
  const queryClient = useQueryClient()
  const { notes, isLoading } = useGetAllNotes()
  const [ showNote, setShowNote ] = useState(false)


  return (
    <section className="bg-paynes pl-2 py-2">
      <div className="flex flex-col gap-2">
        {notes?.length > 0 && <div className="flex items-center relative w-fit">
          <input className="p-2 bg-rich-black rounded-lg outline-none text-light w-[90%] pr-8" type="text" placeholder="find what you want..." />
          <BiSearch className="absolute w-5 h-5 right-7 text-light" />
        </div>}

        { !showNote && <div onClick={()=>setShowNote(true)} className="px-3 py-2 flex gap-2 items-center bg-rich-black rounded-lg w-fit">
          <IoAddCircleSharp className="w-10 h-10 text-light" />
          <p className="text-base text-light">New note</p>
        </div>}

        {showNote && <NewNote updateData={updateData} setShowNote={setShowNote} />}

        <div className="flex flex-col gap-2 mt-5">
          {notes?.length > 0 && <div>
            <h1 className="text-3xl text-light">My notes</h1>
          </div>}
          <div className="flex flex-col gap-3 mt-3">
            {notes?.map((item: Notes, index: number)=>(  
              <Note bg={item?.settings?.backgroundColor!} title={item?.title!} content={item?.content!} pinned={item?.settings?.pinned!} key={index} />
            ))}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </section>
  )
}

export default Home