import { useState,useEffect } from "react";
import apiClient from "../services/api-client"
import { CanceledError } from "axios";

export interface Book{
    pk:number;
    title:string;
    author:string;
    image_url : string;
    formats:string[];
    ratings_count:number;
  }

  interface fetchBooksResponse{

    count:number;
    results:Book[];
  }

const useBooks = ()=>{
    const [books,setBooks] = useState<Book[]>([])
    const [error,setError] = useState<string | null>(null);
    const [isLoading,setLoading] = useState(false)
    
      
      useEffect(()=>{
        const controller = new AbortController();
        setLoading(true)
        apiClient.get<fetchBooksResponse>('/treasure',{signal:controller.signal})
        .then((res)=> {setBooks(res.data.results);
        setLoading(false)})
        .catch(err=>{
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false)})

        return ()=> controller.abort()
      },[])

      return {books,error,isLoading};
}

export default useBooks