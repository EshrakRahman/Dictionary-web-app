import { SearchIcon } from "@/assets";

export default function SearchInput() {
  return (
    <>
      <div className="relative w-full py-10">
        <input
          className="w-full h-12 rounded-lg bg-dark-800 pl-3 pr-10 text-light-100
        placeholder:text-light-400 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-accent-purple"
          type="text"
          placeholder="Search a word"
        />

        <img
          src={SearchIcon}
          alt="Search icon"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5"
        />
      </div>
    </>
  );
}
