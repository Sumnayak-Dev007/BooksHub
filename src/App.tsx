import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Flex, Grid, GridItem,  Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import BooksGrid from "./components/BooksGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import FormatSelecror from "./components/FormatSelecror"
import {Format } from "./hooks/useBooks"
import AuthorLIst from "./components/AuthorLIst"
import { Authors } from "./hooks/useAuthors"
import SortSelector from "./components/SortSelector"
import BookHeading from "./components/BookHeading"
import ApiDocs from "./components/ApiDocs";


export interface BookQuery{
  genre: Genre | null;
  format: Format | null;
  author: Authors | null;
  sortOrder: string;
  searchText : string;
}

function App() {
  const [bookQuery,setBookQuery] =  useState<BookQuery>({} as BookQuery)
  return (
    <>
     <Router>
      <Routes>
        {/* ✅ Home / Main Books Page */}
        <Route  path="/"
          element={
      <Grid templateAreas={{
        base:`"nav" "main"`,
        lg:`"nav nav" "aside main"`
        
      }}
      templateColumns={
        {
          base:'1fr',
          lg:'210px 1fr'
        }
      }
      >
        <GridItem area='nav'><Navbar onSearch={(searchText)=>setBookQuery({...bookQuery,searchText})}/>
        </GridItem> 
        <Show above="lg">
        <GridItem area='aside' paddingRight='10' paddingLeft='1.5'>
          <GenreList selectedGenre={bookQuery.genre} onSelectGenre={(genre)=>setBookQuery({...bookQuery,genre})}/>
          <AuthorLIst selectedAuthors={bookQuery.author} onSelectAuthors={(author)=>setBookQuery({...bookQuery,author})}/>
        </GridItem>
        </Show>
       
        <GridItem area='main'>
          <Box paddingLeft={2}>
          <BookHeading  bookQuery={bookQuery}/>
        <Flex  marginBottom={2}>
          <Box marginRight={5}>
            <FormatSelecror selectedFormat={bookQuery.format} onSelectFormat={(format)=>setBookQuery({...bookQuery,format})}/>
          </Box>
        
            <SortSelector sortOrder={bookQuery.sortOrder} onSelectSort={(sortOrder)=>setBookQuery({...bookQuery,sortOrder})}/>
        </Flex>
        </Box>
        <BooksGrid bookQuery={bookQuery} />
        </GridItem>
      </Grid>
      }
        />
        {/* ✅ API Docs Page */}
        <Route path="/api-docs" element={<ApiDocs />} />

         </Routes>
    </Router>
    </>
  )
}

export default App
