import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { Text } from "@chakra-ui/react";

interface Book{
    pk:number;
    title:string;
  }

  interface fetchBooksResponse{

    count:number;
    results:Book[];
  }
const BooksGrid = () => {
  const [books,setBooks] = useState<Book[]>([])
  const [error,setError] = useState<string | null>(null);

  
  useEffect(()=>{
    apiClient.get<fetchBooksResponse>('/treasure')
    .then(res=>setBooks(res.data.results))
    .catch(err=>setError(err.message))
  },[])
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
      {books.map((book) => (
        <li key={book.pk}>{book.title}</li>
      ))}
    </ul>
    </>
  )
}

export default BooksGrid
