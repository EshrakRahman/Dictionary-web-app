import { LinkIcon } from "@/assets";
import { useContext } from "react";
import { WordContext } from "@/context/WordContext";

export default function Source() {
  const { wordData } = useContext(WordContext);

  if (!wordData?.sourceUrls?.length) return null;

  return (
    <section className="py-6">
      <p className="body-s underline dark:text-light-400 pb-2">Source</p>

      {wordData.sourceUrls.map((url, index) => (
        <div key={index} className="flex items-center space-x-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="body-s dark:text-light-100 text-dark-700 break-all underline"
          >
            {url}
          </a>

          <img src={LinkIcon} alt="open in new tab" className="h-4 w-4" />
        </div>
      ))}
    </section>
  );
}
