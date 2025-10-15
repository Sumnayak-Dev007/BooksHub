import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/brain.svg"
import ColormodeSwitch from './ColormodeSwitch'
import SearchInput from './SearchInput'

function Navbar() {
  return (
    <HStack justifyContent={'space-between'} padding={'15px'}>
        <Image src={logo}  boxSize="60px"/>
        <SearchInput/>
        <Text></Text>
        <ColormodeSwitch/>
    </HStack>
  )
}

export default Navbar
