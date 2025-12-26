import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function DropDown() {
  const { font, setFont } = useContext(ThemeContext);

  return (
    <>
      <select
        className="dark:text-light-100 "
        name="font"
        id="font"
        value={font}
        onChange={(e) => setFont(e.target.value)}
      >
        <option value="mono">Mono</option>
        <option value="serif">Serif</option>
        <option value="sans">Sans Serif</option>
      </select>
    </>
  );
}
