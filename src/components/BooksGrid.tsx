import { SimpleGrid, Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";


const BooksGrid = () => {
  const {books,error,isLoading} = useBooks()
  const skeleton = [1,2,3,4,5,6]
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding='10px' spacing={10}>
      {isLoading && skeleton.map(skeleton => <BookCardSkeleton key={skeleton}/>)}
      {books.map((book) => (
        <BookCard key={book.pk} book={book}/>
      ))}
    </SimpleGrid>
    </>
  )
}

export default BooksGrid
