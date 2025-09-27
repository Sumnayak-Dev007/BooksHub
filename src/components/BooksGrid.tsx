import { SimpleGrid, Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";


const BooksGrid = () => {
  const {books,error} = useBooks()
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding='10px' spacing={10}>
      {books.map((book) => (
        <BookCard key={book.pk} book={book}/>
      ))}
    </SimpleGrid>
    </>
  )
}

export default BooksGrid
