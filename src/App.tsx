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
        <GridItem area='aside' paddingRight='16' paddingLeft='1.5'>
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
