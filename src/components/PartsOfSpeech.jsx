export default function PartsOfSpeech({ partsOfSpeech }) {
  return (
    <>
      <section className="flex items-center space-x-5 py-8">
        <div className="parts-of-speech">
          <p className="font-bold text-xl dark:text-light-100 text-dark-700">
            {partsOfSpeech}
          </p>
        </div>
        <div className="w-full h-px bg-light-300 dark:bg-dark-600"></div>
      </section>
    </>
  );
}
