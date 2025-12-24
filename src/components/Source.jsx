import { LinkIcon } from "@/assets";

export default function Source() {
  return (
    <>
      <section className="py-6">
        <p className="body-s underline dark:text-light-400 pb-2">Source</p>
        <div className=" flex space-x-3">
          <p className="body-s dark:text-light-100 text-dark-700">
            https://en.wiktionary.org/wiki/keyboard
          </p>
          <a href="">
            <img src={LinkIcon} alt="new window icon" />
          </a>
        </div>
      </section>
    </>
  );
}
