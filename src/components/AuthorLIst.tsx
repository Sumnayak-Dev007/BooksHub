
import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react'
import { Authors } from '../hooks/useAuthors'
import useData from '../hooks/useData'


const AuthorLIst = () => {
    const {data,isLoading,error} = useData<Authors>('/treasure/authors')
  return (
    <List>
            {data.map(auth => 
            <ListItem key={auth.id} paddingY='10px'>
              <HStack>
                <Image boxSize='32px' marginRight='1' borderRadius={8} src={auth.image_background}/>
                <Button  fontSize='lg' variant='link'>{auth.name}</Button>
              </HStack>
              
    
            </ListItem>)}
          
        </List>
  )
}

export default AuthorLIst
