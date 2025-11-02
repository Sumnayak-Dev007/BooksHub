
import { Button, Heading, HStack, Image, List, ListItem} from '@chakra-ui/react'
import { Authors } from '../hooks/useAuthors'
import useData from '../hooks/useData'

interface Props{
  onSelectAuthors : (author:Authors)=>void;
  selectedAuthors : Authors | null ;
}
const AuthorLIst = ({onSelectAuthors,selectedAuthors}:Props) => {
    const {data,error} = useData<Authors>('/treasure/author/')
    if (error) return null;
    
  return (
    <>
    <Heading fontSize='2xl' marginY={2}>Authors</Heading>
    <List>
            {data.map(author => 
            <ListItem key={author.id} paddingY='10px'>
              <HStack>
                <Image objectFit='cover' boxSize='32px' marginRight='1' borderRadius={8} src={author.image_background}/>
                <Button whiteSpace='normal' textAlign='left' color={{ base: "gray.400", _dark: "gray.200" }} fontWeight={author.slug === selectedAuthors?.slug?'bold':'normal'} onClick={()=>onSelectAuthors(author)} fontSize='lg' variant='link'>{author.name}</Button>
              </HStack>
              
    
            </ListItem>)}
          
        </List>
        </>
  )
}

export default AuthorLIst
