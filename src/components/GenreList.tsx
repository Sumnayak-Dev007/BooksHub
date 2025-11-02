import { Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react"
import useData from "../hooks/useData"
import { Genre } from "../hooks/useGenre"

interface Props{
  onSelectGenre : (genre:Genre)=>void;
  selectedGenre : Genre | null ;
}

const GenreList = ({selectedGenre,onSelectGenre}:Props) => {
    const {data,isLoading,error} = useData<Genre>('/treasure/genres/')
    if (error) return null;
    if (isLoading) return <Spinner/> 
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
        {data.map(genre => 
        <ListItem key={genre.id} paddingY='10px'>
          <HStack>
            <Image objectFit='cover' boxSize='32px' marginRight='1' borderRadius={8} src={genre.image_background}/>
            <Button whiteSpace='normal' textAlign='left' color={{ base: "gray.600", _dark: "gray.100" }} fontWeight={genre.slug === selectedGenre?.slug?'bold':'normal'} onClick={()=>onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
          

        </ListItem>)}
      
    </List>
    </>
  )
}

export default GenreList
