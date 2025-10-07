import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import useData from "../hooks/useData"
import { Genre } from "../hooks/useGenre"


const GenreList = () => {
    const {data} = useData<Genre>('/treasure/genres')
  return (
    <List>
        {data.map(genre => 
        <ListItem key={genre.id} paddingY='10px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={genre.image_background}/>
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
          

        </ListItem>)}
      
    </List>
  )
}

export default GenreList
