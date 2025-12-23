import { Logo } from "../assets";
import DropDown from "./Dropdown";
import Toggle from "./Toggle";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="right flex space-x-2">
          <DropDown />
          <div className="w-px h-8 bg-light-300"></div>
          <Toggle />
        </div>
      </header>
    </>
  );
}
