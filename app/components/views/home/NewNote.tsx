import { FC } from "react";
import Button from "@/components/UI/buttons/Button";
import { useNewNoteForm } from "@/hooks/form/home/useNewNoteForm";
import { BsPaintBucket, BsArchive } from "react-icons/bs";
import { TbPinned, TbPinnedFilled } from 'react-icons/tb';
import { BiSolidPalette, BiSolidArchiveIn } from 'react-icons/bi';
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props{
    setShowNote: (state: boolean)=>void;
}  

const NewNote: FC<Props> = ({ setShowNote }) => {
    const { values, handleSubmit, handleChange, pinned, setPinned, showOptionsPint, setShowOptionsPint, backgroundColor,
        textColor, handleColorChange, archived, setArchived
    } = useNewNoteForm(setShowNote)

    return (
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input className={`p-2 bg-${backgroundColor} ${textColor} transition-all duration-300 rounded-t-lg outline-none border-b-2 border-b-light w-[90%]`}
                    type="text"
                    placeholder="Title..."
                    name="title"
                    onChange={handleChange}
                    defaultValue={values.title} 
                />

                <textarea className={`p-2 bg-${backgroundColor} ${textColor} transition-all duration-300 outline-none resize-none h-60 max-h-72 w-[90%]`}
                    placeholder="Content..."
                    name="content"
                    onChange={handleChange}
                    value={values.content} 
                />
                
                <div className={`flex gap-3 bg-${backgroundColor} ${textColor} transition-all duration-300 w-[90%] rounded-b-lg pl-1 py-2 items-center`}>

                    {!showOptionsPint && <div className="flex gap-2">  
                        {values.content && values.title ? <Button color="Light" text="Save" type="submit"/> : null}
                        <Button color="Light" text="Close" type="button" onClick={()=>setShowNote(false)}/>
                    </div>}

                    {!showOptionsPint && <div>
                        <BsPaintBucket onClick={()=>setShowOptionsPint(true)} className="w-8 h-8 text-light" />
                    </div>}

                    {!showOptionsPint && <div>
                        { !pinned ? <TbPinned onClick={()=>setPinned(true)} className="w-8 h-8 text-light" />
                        : <TbPinnedFilled onClick={()=>setPinned(false)}  className="w-8 h-8 text-light" />
                        }
                    </div>}

                    {!showOptionsPint && <div>
                        { !archived ? <BsArchive onClick={()=>setArchived(true)} className="w-8 h-8 text-light" />
                        : <BiSolidArchiveIn onClick={()=>setArchived(false)}  className="w-8 h-8 text-light" />
                        }
                    </div>}

                    {showOptionsPint && <div>
                        <div className="flex gap-2">
                            <AiOutlineCloseCircle onClick={()=>setShowOptionsPint(false)} className="h-8 w-8 text-light" />
                            <BiSolidPalette onClick={()=>handleColorChange('rich-black', 'text-light')} className="h-8 w-8 text-rich-black" />
                            <BiSolidPalette onClick={()=>handleColorChange('cherry-red', 'text-light')} className="h-8 w-8 text-cherry-red" />
                            <BiSolidPalette onClick={()=>handleColorChange('cliff-blue', 'text-light')} className="h-8 w-8 text-cliff-blue" />
                            <BiSolidPalette onClick={()=>handleColorChange('qahvei-brown', 'text-light')} className="h-8 w-8 text-qahvei-brown" />
                        </div>
                    
                    </div>}

                </div>
            </form>
    )
}

export default NewNote