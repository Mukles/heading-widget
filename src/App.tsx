import HeadlineWidget from "@/components/headline-widget";
import TwSizeIndicator from "./components/tw-size-indecator";
import "./global.css";
import { HeadlineSettingsProvider } from "./store";

function App() {
  return (
    <>
      <TwSizeIndicator />
      <HeadlineSettingsProvider>
        <HeadlineWidget />
      </HeadlineSettingsProvider>
    </>
  );
}

export default App;
