import { registerI18n } from "@/plugin";
import AppRoutes from "./route";

const App = () => {
  registerI18n();

  return <AppRoutes />;
};
export default App;
