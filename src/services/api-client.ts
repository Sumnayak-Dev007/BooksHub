import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: "EWfSTRHBq0QlEu9eNBM8Tmmp1OnGK2Si", // Directly using API key
    q: "funny memes",
    limit: 100
  }
});

export default apiClient;
