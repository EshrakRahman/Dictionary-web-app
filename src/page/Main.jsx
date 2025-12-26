import {
  Header,
  MeaningComponent,
  SearchInput,
  SoundComponent,
  Source,
} from "../components";

export default function Main() {
  return (
    <div className="px-5 py-6 lg:mx-auto lg:w-185 min-h-screen ">
      <Header />
      <SearchInput />
      <SoundComponent />
      <MeaningComponent />
      <Source />
    </div>
  );
}
