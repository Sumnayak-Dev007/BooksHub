import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import BooksGrid from "./components/BooksGrid"
import GenreList from "./components/GenreList"


function App() {
  

  return (
    <>
      <Grid templateAreas={{
        base:`"nav" "main"`,
        lg:`"nav nav" "aside main"`
      }}>
        <GridItem area='nav'><Navbar/>
        </GridItem> 
        <Show above="lg">
        <GridItem area='aside'>
          <GenreList/>
        </GridItem>
        </Show>
       
        <GridItem area='main'>
        <BooksGrid />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
