import AppRoutes from "./route";
import enLocale from "@/locale/en";
import faLocale from "@/locale/fa";
import "./plugin/i18n";
import { addTranslationSchema } from "./plugin/i18n";
import { useTranslation } from "react-i18next";
const App = () => {
  const { ready } = useTranslation();
  if (ready) {
    addTranslationSchema("fa", faLocale);
    addTranslationSchema("en", enLocale);
  }
  return <AppRoutes />;
};
export default App;
