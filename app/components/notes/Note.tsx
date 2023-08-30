import { Notes } from "@/interfaces/notes/notes";
import { Dispatch, FC, SetStateAction } from "react";
import { TbPinnedFilled } from "react-icons/tb"

interface Props {
  item: Notes;
  setNoteSelected: Dispatch<SetStateAction<any>>
}

const Note: FC<Props> = ({ item, setNoteSelected }) => {
  return (
    <div onClick={()=>setNoteSelected(item)} className={`w-11/12 max-h-72 bg-${item?.settings?.backgroundColor} text-light cursor-pointer rounded-lg p-2 flex flex-col gap-1 md:w-[300px] md:h-[300px]`}>
        <div className="flex items-center justify-between">
            <h3 className="text-xl">{item?.title}</h3>
            { item?.settings?.pinned && <TbPinnedFilled className="h-7 w-7 text-light" />}
        </div>
        <div className="max-h-[90%] pr-1 scrollbar">
            <h4 className="text-sm">{item?.content}</h4>
        </div>
    </div>
  )
}

export default Note