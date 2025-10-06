import useData from "./useData";

export interface Book{
    pk:number;
    title:string;
    author:string;
    image_url : string;
    formats:string[];
    ratings_count:number;
  }

 

const useBooks = ()=> useData<Book>('/treasure')

export default useBooks