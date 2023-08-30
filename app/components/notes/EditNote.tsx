import { useEditNoteForm } from "@/hooks/form/home/useEditNoteForm";
import { NoteType } from "@/interfaces/form/notes/notes";
import { Dispatch, FC, SetStateAction } from "react";
import { TbPinned, TbPinnedFilled } from "react-icons/tb"
import Button from "../UI/buttons/Button";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import { BiSolidArchiveIn, BiSolidPalette } from "react-icons/bi";
import { BsArchive, BsPaintBucket } from "react-icons/bs";
import { useDeleteNote } from "@/hooks/notes/useDeleteNote";

interface Props {
  item: NoteType;
  setNoteSelected: Dispatch<SetStateAction<any>>;
  updateData: ()=>void
}

const EditNote: FC<Props> = ({ item, setNoteSelected, updateData }) => {
  const { values, handleSubmit, handleChange, pinned, setPinned, showOptionsPint, setShowOptionsPint, backgroundColor, handleColorChange, archived, setArchived } = useEditNoteForm(item, setNoteSelected, updateData) 

  const { deleteNoteFc } = useDeleteNote(setNoteSelected, updateData)

  const handleOnCloseFunction = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLDivElement).id === 'container') setNoteSelected(null);
  }

  const deleteNote = () =>{
    deleteNoteFc.mutate(item)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 transition-opacity">
        <div id="container" onClick={handleOnCloseFunction} className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <form onSubmit={handleSubmit} className={`z-[9000] w-11/12 h-72 bg-${backgroundColor} text-light rounded-lg p-2 flex flex-col gap-1 md:w-[600px] md:h-[600px]`}>
        <div className="flex items-center justify-between">
          <input className={`p-2 bg-${backgroundColor} text-light transition-all duration-300 rounded-t-lg outline-none border-b-2 border-b-light w-[90%]`}
            type="text"
            placeholder="Title..."
            name="title"
            defaultValue={values?.title} 
            onChange={handleChange}
          />
          <AiOutlineClose id="close" onClick={()=>setNoteSelected(null)} className="h-7 w-7 text-light cursor-pointer"/>
        </div>
        <div className="max-h-[90%] pr-1 h-52 md:h-full">
          <textarea className={`p-2 bg-${backgroundColor} text-light scrollbar transition-all h-full duration-300 outline-none resize-none w-full`}
            placeholder="Content..."
            name="content"
            defaultValue={values?.content}
            onChange={handleChange}
          />
        </div>

        <div className={`flex gap-3 bg-${backgroundColor} text-light transition-all duration-200 w-full rounded-b-lg pl-1 py-2 items-center`}>

            {!showOptionsPint && <div className="flex gap-2">  
                {values.content && values.title ? <Button color="Light" text="Save" type="submit"/> : null}
            </div>}

            {!showOptionsPint && <div>
                <BsPaintBucket onClick={()=>setShowOptionsPint(true)} className="w-8 h-8 text-light cursor-pointer" />
            </div>}

            {!showOptionsPint && <div>
                { !pinned ? <TbPinned onClick={()=>setPinned(true)} className="w-8 h-8 text-light cursor-pointer" />
                : <TbPinnedFilled onClick={()=>setPinned(false)}  className="w-8 h-8 text-light cursor-pointer" />
                }
            </div>}

            {!showOptionsPint && <div>
                { !archived ? <BsArchive onClick={()=>setArchived(true)} className="w-8 h-8 text-light cursor-pointer" />
                : <BiSolidArchiveIn onClick={()=>setArchived(false)}  className="w-8 h-8 text-light cursor-pointer" />
                }
            </div>}

            {!showOptionsPint && <Button onClick={deleteNote} type="button" color="Alert" text="Delete" /> }

            {showOptionsPint && <div>
                <div className="flex gap-2">
                    <AiOutlineCloseCircle onClick={()=>setShowOptionsPint(false)} className="h-8 w-8 text-light cursor-pointer" />
                    <BiSolidPalette onClick={()=>handleColorChange('rich-black', 'text-light')} className="h-8 w-8 text-rich-black cursor-pointer" />
                    <BiSolidPalette onClick={()=>handleColorChange('cherry-red', 'text-light')} className="h-8 w-8 text-cherry-red cursor-pointer" />
                    <BiSolidPalette onClick={()=>handleColorChange('cliff-blue', 'text-light')} className="h-8 w-8 text-cliff-blue cursor-pointer" />
                    <BiSolidPalette onClick={()=>handleColorChange('qahvei-brown', 'text-light')} className="h-8 w-8 text-qahvei-brown cursor-pointer" />
                </div>
            </div>}
          </div>
      </form>
    </div>
  )
}

export default EditNote