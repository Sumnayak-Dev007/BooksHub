import { useState,useEffect } from "react";
import apiClient from "../services/api-client"
import { CanceledError } from "axios";

interface Book{
    pk:number;
    title:string;
  }

  interface fetchBooksResponse{

    count:number;
    results:Book[];
  }

const useBooks = ()=>{
    const [books,setBooks] = useState<Book[]>([])
      const [error,setError] = useState<string | null>(null);
    
      
      useEffect(()=>{
        const controller = new AbortController();
        apiClient.get<fetchBooksResponse>('/treasure',{signal:controller.signal})
        .then(res=>setBooks(res.data.results))
        .catch(err=>{
            if(err instanceof CanceledError) return;
            setError(err.message)})

        return ()=> controller.abort()
      },[])

      return {books,error};
}

export default useBooks