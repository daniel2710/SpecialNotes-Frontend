'use client'
import Button from "@/components/UI/buttons/Button";
import Loader from "@/components/UI/loaders/Loader";
import EditNote from "@/components/notes/EditNote";
import Note from "@/components/notes/Note";
import NewNote from "@/components/views/home/NewNote";
import { useGetAllNotes } from "@/hooks/notes/useGetAllNotes";
import { UserBasic } from "@/interfaces/auth/user";
import { Notes } from "@/interfaces/notes/notes";
import { useQueryClient } from "@tanstack/react-query";
import { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoAddCircleSharp } from "react-icons/io5";
import { ToastContainer } from "react-toastify";  

interface Props{
  user: UserBasic;
}

const Home: FC<Props> = ({ user }) => {
  const queryClient = useQueryClient()
  const updateData = () =>{  
    queryClient.invalidateQueries({ queryKey:['allNotes']});    
  }
  const { data, notes, search, setSearch, isLoading, error, currentPage, setPage } = useGetAllNotes(user?.user?._id || '', true, false)  
  const [ showNote, setShowNote ] = useState(false)
  const [ noteSelected, setNoteSelected ] = useState(null)

  return (
    <section className="bg-paynes pl-2 py-2 h-full">
      <div className="flex flex-col gap-2 h-full">

        {!error && <div className="md:w-[90%] md:m-auto"> <div className="flex items-center relative w-fit md:w-[400px]">
          <input value={search} onChange={(e)=>setSearch(e.target.value)} className="p-2 bg-rich-black rounded-lg outline-none text-light w-[90%] pr-8 md:p-4 md:pr-8" type="text" placeholder="find what you want..." />
          <BiSearch className="absolute w-5 h-5 right-7 text-light md:right-[44px]" />
        </div>
        </div>}  

          {!showNote && <div className="md:w-[90%] md:m-auto"> <div onClick={()=>setShowNote(true)} className="px-3 py-2 flex gap-2 items-center bg-rich-black rounded-lg w-fit cursor-pointer">
            <IoAddCircleSharp className="w-10 h-10 text-light" />
            <p className="text-base text-light">New note</p>
          </div>
        </div>}

        {showNote && <div className="md:w-[90%] md:m-auto"> <NewNote updateData={updateData} setShowNote={setShowNote} /> </div>}

        <div className="flex flex-col gap-2 mt-5 h-full justify-between">

          <div className="flex flex-col md:gap-3 xl:gap-10">
            <div className="mb-3">
              <h1 className="text-3xl text-light md:text-[48px] md:text-center">My notes</h1>
            </div>

            {notes.length < 1 && !isLoading && <h2 className="mt-3 text-rich-black text-xl md:w-[90%] md:m-auto md:text-2xl">No results</h2> }
            
            {!isLoading && !error && <div className="flex flex-col gap-3 mt-3 md:flex-row md:flex-wrap md:h-fit md:gap-5 md:w-[90%] md:m-auto">
              {notes?.map((item: Notes, index: number)=>(  
                <Note item={item} setNoteSelected={setNoteSelected} key={index} />  
              ))}
              </div>
            }

            {isLoading && <div className="flex justify-center items-center mt-10"> <Loader/> </div> }
          </div>

          {!isLoading && !error && <div className="flex justify-center gap-5 pt-4 pb-4">
            {data?.previous && <Button onClick={()=>setPage(currentPage-1)} color='Light' text="Previous" type="button" />}
            {data?.next && <Button onClick={()=>setPage(currentPage+1)} color='Light' text="Next" type="button" /> }
          </div>}
        </div>


      </div>
      <ToastContainer/>
      { noteSelected && <EditNote item={noteSelected} setNoteSelected={setNoteSelected} updateData={updateData}/>}
    </section>
  )
}

export default Home