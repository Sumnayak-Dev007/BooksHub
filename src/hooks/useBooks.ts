import useData from "./useData";
import { Genre } from "./useGenre";

export interface Format{
  id: number;
  name:string;
  slug:string;
}

export interface Book{
    pk:number;
    title:string;
    author:string;
    image_url : string;
    formats:string[];
    ratings_count:number;
    parent_formats: {format:Format}[];
  }

 

const useBooks = (selectedGenre: Genre | null)=> useData<Book>('/treasure',{params:{genres: selectedGenre?.slug}},[selectedGenre?.slug])

export default useBooks