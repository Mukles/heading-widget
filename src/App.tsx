import HeadlineWidget from "@/components/headline-widget";
import "./global.css";
import { HeadlineSettingsProvider } from "./store";

function App() {
  return (
    <HeadlineSettingsProvider>
      <HeadlineWidget />
    </HeadlineSettingsProvider>
  );
}

export default App;
