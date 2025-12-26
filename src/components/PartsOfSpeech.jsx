export default function PartsOfSpeech({ meaning }) {
  return (
    <section className="pl-3 py-6">
      <div className="flex items-center space-x-5">
        <p className="font-bold italic text-xl dark:text-light-100 text-dark-700">
          {meaning.partOfSpeech}
        </p>
        <div className="w-full h-px bg-light-300 dark:bg-dark-600"></div>
      </div>

      <p className="font-normal pb-3 pt-6 text-base dark:text-light-400">
        Meaning
      </p>

      <ul className="list-disc marker:text-accent-purple flex flex-col space-y-5 text-[15px] leading-6 dark:text-light-100 text-dark-700 pl-6">
        {meaning.definitions.slice(0, 3).map((def, index) => (
          <li key={index}>{def.definition}</li>
        ))}
      </ul>

      {meaning.synonyms?.length > 0 && (
        <div className="synonyms space-x-8 flex py-4">
          <p className="font-normal text-base dark:text-light-400">Synonyms</p>

          <div className="flex space-x-3 flex-wrap">
            {meaning.synonyms.slice(0, 4).map((syn, index) => (
              <span
                key={index}
                className="text-base font-normal text-accent-purple"
              >
                {syn}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
