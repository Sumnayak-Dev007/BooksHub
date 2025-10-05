import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { Book } from "../hooks/useBooks" 
import { FaBook, FaTabletAlt, FaHeadphones } from "react-icons/fa";
import CriticScore from "./CriticScore";



const formatIconMap: Record<string, React.ElementType> = {
  paperback: FaBook,
  ebook: FaTabletAlt,
  audiobook: FaHeadphones,
};



interface Props {
    book : Book
}

const BookCard = ({book}:Props) => {
  const FormatIcons = ({ formats }: { formats: string[] }) => {
  return (
    <HStack spacing={3} marginY={1}>
      {formats.map((format) => {
        const Icon = formatIconMap[format];
        return Icon ? <Icon key={format} size={20}/> : null;
      })}
    </HStack>
  );
};
  return (
    <Card>
        <Image src={book.image_url}
         width="100%"
        height="340px"
        objectFit="cover"
        
        />
        <CardBody >
            <Heading fontSize='2xl'>{book.title}</Heading>
            <Text fontSize="sm" >by {book.author}</Text>

            {/* Show format icon & label */}
        

        {/* Ratings */}
        <HStack marginTop={2} justifyContent="space-between">
          <FormatIcons formats={book.formats} />
          <CriticScore rating={book.ratings_count} /> 
          {/* Example: convert ratings_count to 5-star scale */}
          
        </HStack>
        </CardBody>
    </Card>
  )
}

export default BookCard
