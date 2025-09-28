import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { Book } from "../hooks/useBooks" 
import { FaBook, FaTabletAlt, FaHeadphones } from "react-icons/fa";



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
    <Card borderRadius={10} overflow='hidden' paddingX='5px'>
        <Image src={book.image_url}
         width="100%"
        height="340px"
        objectFit="cover"
        
        />
        <CardBody>
            <Heading fontSize='2xl'>{book.title}</Heading>
            <Text fontSize="sm" color="gray.200">by {book.author}</Text>

            {/* Show format icon & label */}
        <FormatIcons formats={book.formats} />
        </CardBody>
    </Card>
  )
}

export default BookCard
