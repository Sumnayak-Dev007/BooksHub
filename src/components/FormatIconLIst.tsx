import {  
  FaBookOpen, 
  FaBook, 
  FaTabletAlt, 
  FaHeadphones, 
  FaFilePdf} 
from 'react-icons/fa'
import { HStack, Icon} from "@chakra-ui/react"
import { Format } from "../hooks/useBooks"
import { IconType } from 'react-icons'


interface Props{
    formats: Format[]
}

const FormatIconLIst = ({formats}:Props) => {

    const iconMap : Record<string, IconType> = {
        paperback:FaBook,
        hardcover: FaBookOpen,
        audiobook: FaHeadphones,
        pdf: FaFilePdf,
        ebook: FaTabletAlt
    }
  return (
    <HStack marginY={'15px'}>
       {formats.map((format)=>(
        <Icon as={iconMap[format.slug]} color='gray.400'/>
       ))}
    </HStack>
  )
}

export default FormatIconLIst
