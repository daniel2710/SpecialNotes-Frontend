import { BiSolidNote, BiSolidArchiveIn } from 'react-icons/bi';
import { BsTrash3Fill } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';


export const iconMappings: { [key: string]: IconType } = {
    BiSolidNote,
    BiSolidArchiveIn,
    BsTrash3Fill,
};

type SidebarItem = {
    icon: string; 
    title: string;
    route: string;
};

export const itemsSidebar: SidebarItem[] = [
    {
        icon: 'BiSolidNote',
        title: 'Notes',
        route: '/'
    },
    {
        icon: 'BiSolidArchiveIn',
        title: 'Archive',
        route: '/archive'
    },
    {
        icon: 'BsTrash3Fill',
        title: 'Trash',
        route: '/trash'
    },
]