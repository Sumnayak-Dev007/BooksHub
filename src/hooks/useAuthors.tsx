import authors from "../data/authors";

export interface Authors {
    id:number;
    slug:string;
    name:string;
    image_background:string;
}


const useAuthors = () =>({data:authors,isLoading:false,error:null})

export default useAuthors