import { DarkModeIcon } from "../assets";

export default function Toggle() {
  return (
    <>
      <div className="flex space-x-3 items-center">
        <label className="switch">
          <input type="checkbox" className="switch-input" defaultChecked />
          <span className="switch-slider"></span>
        </label>
        <div className="icon">
          <img src={DarkModeIcon} alt="Dark mode icon" />
        </div>
      </div>
    </>
  );
}
