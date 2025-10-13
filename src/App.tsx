import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import BooksGrid from "./components/BooksGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import FormatSelecror from "./components/FormatSelecror"
import {Format } from "./hooks/useBooks"
import AuthorLIst from "./components/AuthorLIst"


export interface BookQuery{
  genre: Genre | null;
  format: Format | null;
}

function App() {
  const [bookQuery,setBookQuery] =  useState<BookQuery>({} as BookQuery)
  return (
    <>
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
        <GridItem area='nav'><Navbar/>
        </GridItem> 
        <Show above="lg">
        <GridItem area='aside' paddingRight='10' paddingLeft='1.5'>
          <GenreList selectedGenre={bookQuery.genre} onSelectGenre={(genre)=>setBookQuery({...bookQuery,genre})}/>
          <AuthorLIst/>
        </GridItem>
        </Show>
       
        <GridItem area='main'>
        <FormatSelecror selectedFormat={bookQuery.format} onSelectFormat={(format)=>setBookQuery({...bookQuery,format})}/>
        <BooksGrid bookQuery={bookQuery} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
