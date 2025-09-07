import axios from "axios";
import { Note } from "../types/note";

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

interface NoteHttpRespond {
    notes: Note[],
    totalPages: number,
}

export interface CreateNewNote {
    title: string,
    content: string,
    tag: string,
}

axios.defaults.baseURL = "https://notehub-public.goit.study";

export const fetchNotes = async (searchQuery: string, currentPage: number): Promise<NoteHttpRespond> => {
    const response = await axios.get<NoteHttpRespond>("/api/notes",
        {
            params: {
                search: searchQuery,
                page: currentPage,
                perPage: 12
            },
            headers: {
                Authorization: `Bearer ${myKey}`,
            },
        }
    );
    return response.data;
}

export const fetchNoteById = async (noteId: string) => {
    const response = await axios.get<Note>(`/api/notes/${noteId}`,
        {
            headers: {
                Authorization: `Bearer ${myKey}`,
            },
        }
    );
    return response.data;
}

export const deleteNote = async (noteId: Note["id"]): Promise<Note> => {
    const response = await axios.delete<Note>(
        `/api/notes/${noteId}`,
        {headers: {
            Authorization: `Bearer ${myKey}`,
        }}
    );
    return response.data;
}

export const createNote = async (newTask: CreateNewNote): Promise<Note> => {
    const res = await axios.post<Note>("/api/notes/",
        newTask,
        {headers: {
            Authorization: `Bearer ${myKey}`,
        }}
    );
  return res.data;
};