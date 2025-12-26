import { WordContextProvider } from "./context/WordContext";
import { Main } from "./page";

export default function App() {
  return (
    <WordContextProvider>
      <div className="dark:bg-dark-900">
        <Main />
      </div>
    </WordContextProvider>
  );
}
