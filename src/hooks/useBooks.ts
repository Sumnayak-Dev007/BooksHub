import { BookQuery } from "../App";
import useData from "./useData";

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

 

const useBooks = (bookQuery:BookQuery)=> 
  useData<Book>('/treasure',
  {params:{genres: bookQuery.genre?.slug,
  bformat: bookQuery.format?.slug,
  author: bookQuery.author?.slug,
  ordering:bookQuery.sortOrder,
  search:bookQuery.searchText
  }},
  [bookQuery]
)

export default useBooks