import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { Book } from "../hooks/useBooks" 
import CriticScore from "./CriticScore";
import FormatIconLIst from "./FormatIconLIst";







interface Props {
    book : Book
}

const BookCard = ({book}:Props) => {

  return (
    <Card width='-moz-fit-content' >
        <Image src={book.image_url}
         width="85%"
        height="250px"
        objectFit="cover"
        marginX='auto'
        
        />
        <CardBody >
            <Heading fontSize='lg'>{book.title}</Heading>
            <Text fontSize="sm" >by {book.author}</Text>
            <FormatIconLIst formats={book.parent_formats.map(f=>f.format)}/>

 
            {/* Ratings */}
            <HStack marginTop={2} justifyContent="end">
              <CriticScore rating={book.ratings_count} /> 
              {/* Example: convert ratings_count to 5-star scale */}
            </HStack>
            </CardBody>
    </Card>
  )
}

export default BookCard
