import { SimpleGrid, Text } from "@chakra-ui/react";
import useBooks, { Format } from "../hooks/useBooks";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";
import BookCardContainer from "./BookCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props{
  selectedGenre : Genre|null;
  selectedFormat: Format|null;
}

const BooksGrid = ({selectedGenre,selectedFormat}:Props) => {
  const {data,error,isLoading} = useBooks(selectedGenre,selectedFormat)
  const skeleton = [1,2,3,4,5,6]
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} 
  spacing="10px"
  padding={3}
  >
      {isLoading && skeleton.map(skeleton => 
       <BookCardContainer key={skeleton}> 
         <BookCardSkeleton /> 
        </BookCardContainer> )}
      {data.map((book) => (
        <BookCardContainer key={book.pk}>
          <BookCard  book={book}/>
        </BookCardContainer>
      ))}
    </SimpleGrid>
    </>
  )
}

export default BooksGrid
