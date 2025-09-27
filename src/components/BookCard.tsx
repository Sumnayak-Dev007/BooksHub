import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Book } from "../hooks/useBooks" 

interface Props {
    book : Book
}

const BookCard = ({book}:Props) => {
  return (
    <Card borderRadius={10} overflow='hidden' size={100}>
        <Image src={book.image_url} />
        <CardBody>
            <Heading fontSize='2xl'>{book.title}</Heading>
        </CardBody>
    </Card>
  )
}

export default BookCard
