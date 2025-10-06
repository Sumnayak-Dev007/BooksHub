import useData from "./useData";

export interface Genre {
    id:number;
    name:string;
}


const useGenre = ()=> useData<Genre>('/treasure/genres')

export default useGenre