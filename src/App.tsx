import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import BooksGrid from "./components/BooksGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import FormatSelecror from "./components/FormatSelecror"
import { Format } from "./hooks/useBooks"


function App() {
  const [selectedGenre,setSelectedGenre] = useState<Genre | null>(null)
  const [selectedFormat,setSelectedFormat] = useState<Format | null>(null)
  return (
    <>
      <Grid templateAreas={{
        base:`"nav" "main"`,
        lg:`"nav nav" "aside main"`
        
      }}
      templateColumns={
        {
          base:'1fr',
          lg:'200px 1fr'
        }
      }
      >
        <GridItem area='nav'><Navbar/>
        </GridItem> 
        <Show above="lg">
        <GridItem area='aside' paddingRight='10' paddingLeft='1.5'>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>
        </Show>
       
        <GridItem area='main'>
        <FormatSelecror selectedFormat={selectedFormat} onSelectFormat={(format)=>setSelectedFormat(format)}/>
        <BooksGrid selectedGenre={selectedGenre} selectedFormat={selectedFormat} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
