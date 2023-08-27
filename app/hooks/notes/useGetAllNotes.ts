import { baseURL } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetAllNotes = () => {
  
    const { data, isLoading, error } = useQuery(["allNotes"],  
      async () => {
        const res = await baseURL.get("notes");
        return res.data;
      },
      {
        retry: false,
        refetchOnWindowFocus: false
      }
    );
  
    const notes = data?.notes || [];
    return { data, notes, isLoading, error };
  };