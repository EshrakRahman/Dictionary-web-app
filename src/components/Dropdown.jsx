export default function DropDown() {
  return (
    <>
      <select className="dark:text-light-100 " name="font" id="font">
        <option value="mono">Mono</option>
        <option value="serif">Serif</option>
        <option value="sans">Sans Serif</option>
      </select>
    </>
  );
}
