import { PlayIcon } from "@/assets";
import PartsOfSpeech from "./PartsOfSpeech";

export default function SoundComponent() {
  return (
    <>
      <section className="flex justify-between items-center">
        <div className="left">
          <h1 className="font-bold text-4xl text-dark-700 dark:text-light-100">
            Keyboard
          </h1>
          <p className="body-m text-accent-purple">/ˈkiːbɔːd/</p>
        </div>
        <div className="right">
          <img src={PlayIcon} alt="play icon" />
        </div>
      </section>
      <PartsOfSpeech partsOfSpeech="noun" />
    </>
  );
}
