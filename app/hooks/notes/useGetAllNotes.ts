import { baseURL } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetAllNotes = (idUser: string, active?: boolean, archived?: boolean) => {
  const [ currentPage, setPage ] = useState(1)
  const [ search, setSearch ] = useState('')

  const { data, isLoading, error } = useQuery(["allNotes", currentPage, search, idUser],  
    async () => {
      const res = await baseURL.get(`notes/user/${idUser}?page=${currentPage}&search=${search}&active=${active}&archived=${archived}`);
      return res.data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 0,
      cacheTime: 0
    }
  );
  
  const notes = data?.notes || [];
  const totalPages = data?.total_pages
  return { data, notes, totalPages, isLoading, error, currentPage, setPage, setSearch, search };
};