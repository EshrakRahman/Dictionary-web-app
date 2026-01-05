import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const WordContext = createContext(undefined);

export function WordContextProvider({ children }) {
  const [inputWord, setInputWord] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchWord) return;

    setLoading(true);
    setError(null);
    setWordData(null);

    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((res) => {
        setWordData(res.data[0]);
      })
      .catch(() => {
        setError("No definitions found for this word.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchWord]);

  return (
    <WordContext.Provider
      value={{
        inputWord,
        setInputWord,
        searchWord,
        setSearchWord,
        wordData,
        loading,
        error,
      }}
    >
      {children}
    </WordContext.Provider>
  );
}
