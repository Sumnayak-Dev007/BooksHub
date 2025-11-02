import useData from "./useData";

export interface Genre {
    id:number;
    slug:string;
    name:string;
    image_background:string;
}


const useGenre = ()=> useData<Genre>('/treasure/genres/')

export default useGenre