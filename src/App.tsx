import { initI18n } from "@/plugin";
import AppRoutes from "./route";

const App = () => {
  initI18n();

  return <AppRoutes />;
};
export default App;
