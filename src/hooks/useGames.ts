import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGames = ()=>{
  const [memes, setMemes] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController()
    const fetchMemes = async () => {
      try {
        const response = await apiClient.get("/search",{signal:controller.signal});
        setMemes(response.data.data); // Giphy API returns data inside `data`
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError("Failed to load memes");
      }
    };
    fetchMemes();
    return ()=>{
      controller.abort
    }
  }, []);

  return {memes,error}
}

export default useGames