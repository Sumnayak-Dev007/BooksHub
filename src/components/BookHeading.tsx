import { Heading } from "@chakra-ui/react"
import { BookQuery } from "../App"

interface Props{
    bookQuery:BookQuery
}

const BookHeading = ({bookQuery}:Props) => {
    const heading = `${bookQuery.format?.name || ""} ${bookQuery.genre?.name|| ""} ${bookQuery.author?.name || ""} Books`
  return (
   <Heading as='h1' marginBottom={5} fontSize='4xl'>{heading}</Heading>
  )
}

export default BookHeading
