import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e11fdea180mshc9fdd8e8fb14fbap1990fcjsna531dcdcad63",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

export function useSearch(searchTitle) {
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://movie-database-alternative.p.rapidapi.com/?s=${searchTitle}&r=json&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSearchResults(response))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchTitle]);

  return { searchResults, loading, error };
}
