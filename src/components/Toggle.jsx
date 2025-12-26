import { useContext } from "react";
import { DarkModeIcon } from "../assets";
import { ThemeContext } from "@/context/ThemeContext";

export default function Toggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <div className="flex space-x-3 items-center">
        <label className="switch">
          <input
            type="checkbox"
            className="switch-input"
            checked={theme === "dark"}
            onChange={handleToggle}
          />
          <span className="switch-slider"></span>
        </label>
        <div className="icon">
          <img src={DarkModeIcon} alt="Dark mode icon" />
        </div>
      </div>
    </>
  );
}
