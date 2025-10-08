import useData from "./useData";
import { Genre } from "./useGenre";

export interface Book{
    pk:number;
    title:string;
    author:string;
    image_url : string;
    formats:string[];
    ratings_count:number;
  }

 

const useBooks = (selectedGenre: Genre | null)=> useData<Book>('/treasure',{params:{genres: selectedGenre?.slug}},[selectedGenre?.slug])

export default useBooks