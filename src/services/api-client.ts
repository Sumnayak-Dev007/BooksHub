import axios from "axios";

export default axios.create({
  baseURL : 'https://api.rawg.io/api',
  params : {
    key : '7d619b5a202e402db51c60a3211e5435'
  }
})

 