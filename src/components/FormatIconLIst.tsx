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
import { color } from 'framer-motion'


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
    <HStack marginY={1}>
       {formats.map((format)=>(
        <Icon as={iconMap[format.slug]} color='gray.500'/>
       ))}
    </HStack>
  )
}

export default FormatIconLIst
