import { PlayIcon } from "@/assets";
import PartsOfSpeech from "./PartsOfSpeech";
import { useContext, useRef } from "react";
import { WordContext } from "@/context/WordContext";

export default function SoundComponent() {
  const { wordData } = useContext(WordContext);
  const audioRef = useRef(null);

  if (!wordData) return null;

  function handlePlay() {
    if (!wordData.audio) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(wordData.audio);
    }

    audioRef.current.play();
  }
  return (
    <>
      <section className="flex justify-between items-center">
        <div className="left">
          <h1 className="font-bold text-4xl text-dark-700 dark:text-light-100">
            {wordData.word}
          </h1>
          <p className="body-m text-accent-purple">{wordData.phonetic}</p>
        </div>
        <button
          onClick={handlePlay}
          disabled={!wordData.audio}
          className="disabled:opacity-50 hover:cursor-pointer"
        >
          <img src={PlayIcon} alt="play icon" />
        </button>
      </section>
    </>
  );
}
