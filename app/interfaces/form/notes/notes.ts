export type NoteType = {
    title: string;
    content: string;
    settings: {
        pinned: boolean;
        archived: boolean;
        backgroundColor: string;
    }
}