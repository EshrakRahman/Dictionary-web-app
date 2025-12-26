import { SearchIcon } from "@/assets";
import { WordContext } from "@/context/WordContext";
import { useContext, useState } from "react";

export default function SearchInput() {
  const { inputWord, setInputWord, searchWord, setSearchWord } =
    useContext(WordContext);

  function handleWordInput(e) {
    setInputWord(e.target.value);
  }

  function handleSearchWord(e) {
    e.preventDefault();
    setSearchWord(inputWord);
    setInputWord("");
  }

  return (
    <>
      <div className="relative w-full py-10">
        <input
          className="w-full h-12 rounded-lg dark:bg-dark-800 bg-light-200 pl-3 pr-10 text-dark-700 dark:text-light-100 placeholder:text-light-400 
          outline-none ring-1 ring-transparent focus:ring-2 focus:ring-accent-purple"
          type="text"
          placeholder="Search a word"
          value={inputWord}
          onChange={handleWordInput}
        />

        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer p-1"
          onClick={handleSearchWord}
        >
          <img src={SearchIcon} alt="Search icon" className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
