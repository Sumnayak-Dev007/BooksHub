import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { Book } from "../hooks/useBooks" 
import CriticScore from "./CriticScore";
import FormatIconLIst from "./FormatIconLIst";







interface Props {
    book : Book
}

const BookCard = ({book}:Props) => {

  return (
    <Card >
        <Image src={book.image_url}
         width="100%"
        height="340px"
        objectFit="cover"
        
        />
        <CardBody >
            <Heading fontSize='2xl'>{book.title}</Heading>
            <Text fontSize="sm" >by {book.author}</Text>
           <FormatIconLIst formats={book.parent_formats.map(f=>f.format)}/>

            {/* Show format icon & label */}
        

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
