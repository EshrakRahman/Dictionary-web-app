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

    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((res) => {
        const data = res.data[0];
        const audio = data.phonetics.find((p) => p.audio)?.audio || null;

        setWordData({
          word: data.word,
          audio,
          phonetics: data.phonetics,
          meanings: data.meanings,
          sourceUrls: data.sourceUrls,
        });
      })
      .catch((error) => {
        setError("Word not Found");
        setWordData(null);
      })
      .finally(() => setLoading(false));
  }, [searchWord]);

  return (
    <>
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
    </>
  );
}
