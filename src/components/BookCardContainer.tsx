import { Box } from "@chakra-ui/react"
import {ReactNode } from "react"


interface Props{
    children : ReactNode;
}

const BookCardContainer = ({children}:Props ) => {
  return (
    <Box width="300px" borderRadius={10} overflow='hidden' paddingX='10px'>
        {children}

    </Box>
  )
}

export default BookCardContainer
