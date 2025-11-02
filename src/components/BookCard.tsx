import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { Book } from "../hooks/useBooks" 
import CriticScore from "./CriticScore";
import FormatIconLIst from "./FormatIconLIst";







interface Props {
    book : Book
}

const BookCard = ({book}:Props) => {

  return (
    <Card width='-moz-max-content' bg={{ base: "gray.500", _dark: "gray.800" }} paddingTop={2}>
        <Image src={book.image_url}
         width="95%"
        height="250px"
        objectFit="cover"
        marginX='auto'
        
        />
        <CardBody >
            {/* Ratings */}
            <HStack justifyContent="space-between">
              <FormatIconLIst formats={book.parent_formats.map(f=>f.format)}/>
              <CriticScore rating={book.ratings_count} /> 
              {/* Example: convert ratings_count to 5-star scale */}
            </HStack>
            <Heading fontSize='lg'>{book.title}</Heading>
            <Text fontSize="sm" textAlign='left' >by {book.author}</Text>
            </CardBody>
    </Card>
  )
}

export default BookCard
