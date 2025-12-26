import { useContext, useRef, useEffect } from "react";
import { PlayIcon } from "@/assets";
import { WordContext } from "@/context/WordContext";
export default function SoundComponent() {
  const { wordData } = useContext(WordContext);
  const audioRef = useRef(null);

  const phoneticText = wordData?.phonetics?.find((p) => p.text)?.text || "";

  useEffect(() => {
    if (wordData?.audio) {
      audioRef.current = new Audio(wordData.audio);
    } else {
      audioRef.current = null;
    }
  }, [wordData?.audio]);

  if (!wordData) return null;

  function handlePlay() {
    if (!audioRef.current) return;
    audioRef.current.play();
  }

  return (
    <section className="flex justify-between items-center">
      <div className="left">
        <h1 className="font-bold text-4xl text-dark-700 dark:text-light-100">
          {wordData.word}
        </h1>
        <p className="body-m text-accent-purple">{phoneticText}</p>
      </div>
      <button
        onClick={handlePlay}
        disabled={!wordData.audio}
        className="disabled:opacity-50 hover:cursor-pointer"
      >
        <img src={PlayIcon} alt="play icon" />
      </button>
    </section>
  );
}
