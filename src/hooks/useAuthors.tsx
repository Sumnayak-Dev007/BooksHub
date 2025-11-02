import useData from "./useData"


export interface Authors {
    id:number;
    slug:string;
    name:string;
    image_background:string;
}


const useAuthors = () =>useData<Authors>('/treasure/author/')

export default useAuthors