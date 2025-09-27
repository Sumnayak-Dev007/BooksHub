import { Platform } from '../hooks/useBooks'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'
import { MdPhoneIphone } from 'react-icons/md'
import { IconType } from 'react-icons'
import { BsGlobe } from 'react-icons/bs'


interface Props{
    platforms: Platform[]
}


const PlatformIconsList = ({platforms} : Props) => {
    const iconMap : {[key:string]:IconType} = {
        pc : FaWindows,
        platstation : FaPlaystation,
        xbox: FaXbox,
        nintendo : SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web : BsGlobe,
        android: FaAndroid

    }
  return (
    <HStack marginY={1}>
      {platforms.map((platform)=>
    <Icon as={iconMap[platform.slug]} color='gray.500'/>
    )}
    </HStack>
  )
}

export default PlatformIconsList
