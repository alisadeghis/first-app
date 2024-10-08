import { registerI18n } from "@/plugin";
import AppRoutes from "./route";
import { SettingProvider } from "./provider/SettingProvider";

const App = () => {
  registerI18n();

  return (
    <SettingProvider>
      <AppRoutes />
    </SettingProvider>
  );
};
export default App;
