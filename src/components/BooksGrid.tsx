import { Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";


const BooksGrid = () => {
  const {books,error} = useBooks()
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
      {books.map((book) => (
        <li key={book.pk}>{book.title}</li>
      ))}
    </ul>
    </>
  )
}

export default BooksGrid
