import { SimpleGrid, Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";
import BookCardContainer from "./BookCardContainer";


const BooksGrid = () => {
  const {books,error,isLoading} = useBooks()
  const skeleton = [1,2,3,4,5,6]
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding='10px' spacingX="80" spacingY="16">
      {isLoading && skeleton.map(skeleton => <BookCardContainer> <BookCardSkeleton key={skeleton}/> </BookCardContainer> )}
      {books.map((book) => (
        <BookCardContainer>
          <BookCard key={book.pk} book={book}/>
        </BookCardContainer>
      ))}
    </SimpleGrid>
    </>
  )
}

export default BooksGrid
