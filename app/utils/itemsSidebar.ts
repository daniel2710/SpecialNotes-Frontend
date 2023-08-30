import { BiSolidNote, BiSolidArchiveIn } from 'react-icons/bi';
import { BsTrash3Fill } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';


export const iconMappings: { [key: string]: IconType } = {
    BiSolidNote,
    BiSolidArchiveIn
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
        route: '/home'
    },
    {
        icon: 'BiSolidArchiveIn',
        title: 'Archive',
        route: '/archive'
    }
]