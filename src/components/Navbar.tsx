import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/react.svg"
import ColormodeSwitch from './ColormodeSwitch'

function Navbar() {
  return (
    <HStack justifyContent={'space-between'} padding={'15px'}>
        <Image src={logo}/>
        <Text>Navbar</Text>
        <ColormodeSwitch/>
    </HStack>
  )
}

export default Navbar
