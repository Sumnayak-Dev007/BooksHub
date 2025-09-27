import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/brain.svg"
import ColormodeSwitch from './ColormodeSwitch'

function Navbar() {
  return (
    <HStack justifyContent={'space-between'} padding={'15px'}>
        <Image src={logo}  boxSize="55px"/>
        <Text></Text>
        <ColormodeSwitch/>
    </HStack>
  )
}

export default Navbar
