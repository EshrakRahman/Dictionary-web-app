import { PlayIcon } from "@/assets";
import { useContext, useEffect, useRef } from "react";
import { WordContext } from "@/context/WordContext";

export default function SoundComponent() {
  const { wordData } = useContext(WordContext);
  const audioRef = useRef(null);

  if (!wordData) return null;

  const phoneticText = wordData.phonetics?.find((p) => p.text)?.text || "";

  const audioSrc = wordData.phonetics?.find((p) => p.audio)?.audio || null;

  useEffect(() => {
    if (!audioSrc) return;

    audioRef.current = new Audio(audioSrc);

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [audioSrc]);

  function handlePlay() {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }

  return (
    <section className="flex justify-between items-center">
      <div>
        <h1 className="font-bold text-4xl text-dark-700 dark:text-light-100">
          {wordData.word}
        </h1>
        <p className="body-m text-accent-purple">{phoneticText}</p>
      </div>

      <button
        onClick={handlePlay}
        disabled={!audioSrc}
        className="disabled:opacity-50 hover:cursor-pointer"
      >
        <img src={PlayIcon} alt="play icon" />
      </button>
    </section>
  );
}
