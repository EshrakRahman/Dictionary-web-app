import { useContext } from "react";
import {
  Header,
  MeaningComponent,
  SearchInput,
  SoundComponent,
  Source,
} from "../components";
import { WordContext } from "@/context/WordContext";

export default function Main() {
  const { loading, error, wordData } = useContext(WordContext);
  return (
    <div className="px-5 py-6 lg:mx-auto lg:w-185 min-h-screen ">
      <Header />
      <SearchInput />
      {loading && <p className="text-light-400 py-10">Searching...</p>}
      {error && (
        <div className="py-10 text-center">
          <p className="text-xl font-bold dark:text-light-100">
            No Definitions Found
          </p>
          <p className="text-light-400 mt-2">{error}</p>
        </div>
      )}
      {wordData && !loading && !error && (
        <>
          <SoundComponent />
          <MeaningComponent />
          <Source />
        </>
      )}
    </div>
  );
}
