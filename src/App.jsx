import { useContext } from "react";
import { WordContextProvider } from "./context/WordContext";
import { Main } from "./page";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const { font } = useContext(ThemeContext);
  return (
    <WordContextProvider>
      <div
        className="min-h-screen bg-light-100 dark:bg-dark-900 transition-all duration-300"
        data-font={font}
      >
        <Main />
      </div>
    </WordContextProvider>
  );
}
