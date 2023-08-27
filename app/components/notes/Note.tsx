import { FC } from "react";
import { TbPinnedFilled } from "react-icons/tb"

interface Props {
  title: string;
  content: string;
  bg: string;
  pinned: boolean;
}

const Note: FC<Props> = ({ title, content, bg, pinned }) => {
  return (
    <div className={`w-11/12 max-h-72 bg-${bg} text-light rounded-lg p-2 flex flex-col gap-1`}>
        <div className="flex items-center justify-between">
            <h3 className="text-xl">{title}</h3>
            { pinned && <TbPinnedFilled className="h-7 w-7 text-light" />}
        </div>
        <div className="max-h-[90%] pr-1 scrollbar">
            <h4 className="text-sm">{content}</h4>
        </div>
    </div>
  )
}

export default Note