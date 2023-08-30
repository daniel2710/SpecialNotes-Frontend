export type NoteType = {
    _id?: string;
    title: string;
    content: string;
    settings: {
        active: boolean;
        pinned: boolean;
        archived: boolean;
        backgroundColor: string;
    }
}