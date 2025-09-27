import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Book } from "../hooks/useBooks" 

interface Props {
    book : Book
}

const BookCard = ({book}:Props) => {
  return (
    <Card borderRadius={10} overflow='hidden' paddingX='5px'>
        <Image src={book.image_url}
         width="100%"
        height="340px"
        objectFit="cover"
        
        />
        <CardBody>
            <Heading fontSize='2xl'>{book.title}</Heading>
        </CardBody>
    </Card>
  )
}

export default BookCard
