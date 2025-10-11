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
    ratings_count:number;
    parent_formats: {format:Format}[];
  }

 

const useBooks = (selectedGenre: Genre | null,selectedFormat:Format|null)=> 
  useData<Book>('/treasure',
  {params:{genres: selectedGenre?.slug,
  bformat: selectedFormat?.slug}},
  [selectedGenre?.slug,selectedFormat?.slug])

export default useBooks