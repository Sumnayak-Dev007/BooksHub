import useData from "./useData";

interface Format{
    id:number;
    name:string;
    slug:string;
}

const useFormat = ()=> useData<Format>('/treasure/formats/list/parents')

export default useFormat