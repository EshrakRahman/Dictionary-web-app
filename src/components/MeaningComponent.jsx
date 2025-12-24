import PartsOfSpeech from "./PartsOfSpeech";

export default function MeaningComponent() {
  return (
    <>
      <section className="pl-3">
        <p className="font-normal  pb-3 text-base dark:text-light-400 ">
          Meaning
        </p>
        <div className="list">
          <ul className="font-normal list-disc marker:text-accent-purple   flex flex-col space-y-5 text-[15px] leading-6 dark:text-light-100 text-dark-700">
            <li className="">
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li>
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li>
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </li>
          </ul>
        </div>
        <div className="synonyms space-x-8 flex py-4">
          <div className="">
            <p className="font-normal text-base dark:text-light-400">
              Synonyms
            </p>
          </div>
          <div className=" flex space-x-3">
            <span className="text-base font-normal inline-block text-accent-purple">
              electronic
            </span>
            <span className="text-base font-normal inline-block text-accent-purple">
              keyboard
            </span>
          </div>
        </div>
      </section>
      <PartsOfSpeech partsOfSpeech="verb" />
      <div className="w-full h-px bg-light-300 dark:bg-dark-600"></div>
    </>
  );
}
