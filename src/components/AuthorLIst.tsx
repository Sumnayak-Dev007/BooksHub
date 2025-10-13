
import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import { Authors } from '../hooks/useAuthors'
import useData from '../hooks/useData'

interface Props{
  onSelectAuthors : (author:Authors)=>void;
  selectedAuthors : Authors | null ;
}
const AuthorLIst = ({onSelectAuthors,selectedAuthors}:Props) => {
    const {data,isLoading,error} = useData<Authors>('/treasure/author')
    if (error) return null;
    if (isLoading) return <Spinner/> 
  return (
    <List>
            {data.map(author => 
            <ListItem key={author.id} paddingY='10px'>
              <HStack>
                <Image boxSize='32px' marginRight='1' borderRadius={8} src={author.image_background}/>
                <Button  fontWeight={author.slug === selectedAuthors?.slug?'bold':'normal'} onClick={()=>onSelectAuthors(author)} fontSize='lg' variant='link'>{author.name}</Button>
              </HStack>
              
    
            </ListItem>)}
          
        </List>
  )
}

export default AuthorLIst
