import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/brain.svg"
import ColormodeSwitch from './ColormodeSwitch'
import SearchInput from './SearchInput'


interface Props{
    onSearch : (searchText:string) => void;
}


function Navbar({onSearch}:Props) {
  return (
    <HStack justifyContent={'space-between'} padding={'15px'}>
        <Image src={logo}  boxSize="60px"/>
        <SearchInput onSearch={onSearch}/>
        <Text></Text>
        <ColormodeSwitch/>
    </HStack>
  )
}

export default Navbar
