import { useContext } from "react";
import PartsOfSpeech from "./PartsOfSpeech";
import { WordContext } from "@/context/WordContext";

export default function MeaningComponent() {
  const { wordData } = useContext(WordContext);

  if (!wordData?.meanings) return null;

  return (
    <>
      {wordData.meanings.map((meaning, index) => (
        <PartsOfSpeech key={index} meaning={meaning} />
      ))}
    </>
  );
}
