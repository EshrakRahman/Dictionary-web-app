import {
  DropDown,
  Header,
  MeaningComponent,
  SearchInput,
  SoundComponent,
  Source,
  Toggle,
} from "../components";

export default function Main() {
  return (
    <div className="px-5 py-6 lg:mx-auto lg:w-185 ">
      <Header />
      <SearchInput />
      <SoundComponent />
      <MeaningComponent />
      <Source />
    </div>
  );
}
